uniform float time;
uniform vec2 uRes;
uniform float anim;
uniform sampler2D flowmap;
uniform vec3 uTheme;
varying vec2 vUv;

/*
 A noise function mirrored and thresholded to maximize the value at the center of the screen
 Combined with a second layer of noise to produce an ink on paper effect
*/

const vec3 inkColor = vec3(0.01, 0.01, 0.1);
const vec3 paperColor = vec3(1.0, 0.98, 0.94);

const float speed = 0.0075;
const float shadeContrast = 0.55;

//3D simplex noise from: https://www.shadertoy.com/view/XsX3zB
const float F3 =  0.3333333;
const float G3 =  0.1666667;

vec3 random3(vec3 c) {
    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
    vec3 r;
    r.z = fract(512.0*j);
    j *= .125;
    r.x = fract(512.0*j);
    j *= .125;
    r.y = fract(512.0*j);
    return r-0.5;
}

float simplex3d(vec3 p) {
	 vec3 s = floor(p + dot(p, vec3(F3)));
	 vec3 x = p - s + dot(s, vec3(G3));
	 
	 vec3 e = step(vec3(0.0), x - x.yzx);
	 vec3 i1 = e*(1.0 - e.zxy);
	 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
	 
	 vec3 x1 = x - i1 + G3;
	 vec3 x2 = x - i2 + 2.0*G3;
	 vec3 x3 = x - 1.0 + 3.0*G3;
	 
	 vec4 w, d;
	 
	 w.x = dot(x, x);
	 w.y = dot(x1, x1);
	 w.z = dot(x2, x2);
	 w.w = dot(x3, x3);
	 
	 w = max(0.6 - w, 0.0);
	 
	 d.x = dot(random3(s), x);
	 d.y = dot(random3(s + i1), x1);
	 d.z = dot(random3(s + i2), x2);
	 d.w = dot(random3(s + 1.0), x3);
	 
	 w *= w;
	 w *= w;
	 d *= w;
	 
	 return dot(d, vec4(52.0));
}

float fbmB(vec3 p)
{
	float f = 0.0;	
	float frequency = 1.0;
	float amplitude = 0.5;
	for (int i = 0; i < 5; i++)
	{
		f += simplex3d(p * frequency) * amplitude;
		amplitude *= 0.5;
		frequency *= 2.0 + float(i) / 100.0;
	}
	return min(f, 1.0);
}

vec4 mainImage(vec2 fragCoord )
{
    //Setup coordinates
    vec2 uv = 1.0 - fragCoord.xy / uRes.xy;
    vec2 coord = 1.0 - uv * 2.0;
    uv.x = 1.0 - abs(1.0 - uv.x * 2.0);
    vec3 p = vec3(uv, time * speed);
    
    //Sample a noise function
    float blot = fbmB(p * 3.0 + 8.0);
    float shade = fbmB(p * 2.0 + 16.0);
    
    //Threshold
    blot = (blot + (sqrt(uv.x) - abs(0.5 - uv.y)));
    blot = smoothstep(0.65, 0.71, blot) * max(1.0 - shade * shadeContrast, 0.0);
    
    //Color
    vec4 fragColor = vec4(mix(paperColor, inkColor, blot), 1.0);
    fragColor.rgb *= 1.0 - pow(max(length(coord) - 0.5, 0.0), 5.0);
    return fragColor;
}

vec3 hash3(in vec3 p) {
  vec3 q = vec3(dot(p, vec3(127.1, 311.7, 189.2)),
                dot(p, vec3(269.5, 183.3, 324.7)),
                dot(p, vec3(419.2, 371.9, 128.5)));
  return fract(sin(q) * 43758.5453);
}

float noise(in vec3 x, float v) {
  // adapted from IQ's 2d voronoise:
  // http://www.iquilezles.org/www/articles/voronoise/voronoise.htm
  vec3 p = floor(x);
  vec3 f = fract(x);

  float s = 1.0 + 31.0 * v;
  float va = 0.0;
  float wt = 0.0;
  for (int k=-2; k<=1; k++)
  for (int j=-2; j<=1; j++)
  for (int i=-2; i<=1; i++) {
      vec3 g = vec3(float(i), float(j), float(k));
      vec3 o = hash3(p + g);
      vec3 r = g - f + o + 0.5;
      float d = dot(r, r);
      float w = pow(1.0 - smoothstep(0.0, 1.414, sqrt(d)), s);
      va += o.z * w;
      wt += w;
    }
    return va / wt;
}


float fBm(in vec3 p, float v) {
  float sum = 0.0;
  float amp = 1.0;
  for(int i = 0; i < 1; i++) {
      sum += amp * noise(p, v);
      amp *= 0.5;
      p *= 2.0;
  }
  return sum;
}


void main() {
  // vec2 p = gl_FragCoord.xy / uRes.xy - .5;

  vec4 flow = texture2D(flowmap, vUv);
  // // p += flow.x;

  // vec3 rd = normalize(vec3(p, 1.0));
  // vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;

  // vec3 col = vec3(0.067,0.173,0.537) * fBm(pos, 1.);

  // // gl_FragColor = vec4(mix(vec3(0.067,0.173,0.537), col, anim), 1.);

    vec2 uv = vUv;
    vec2 coord = 1.0 - uv * 2.0;
    uv.x = 1.0 - abs(1.0 - uv.x * 2.0);
    vec3 p = vec3(uv, time * speed);
  
  //Sample a noise function
  float blot = fbmB(p * 10.0 + 80.0);
  float shade = fbmB(p * 2.0 + 16.0);
  
  //Threshold
  // blot = (blot + (sqrt(flow.x) - abs(0.5 - flow.y)));
  // blot = smoothstep(0.65, 0.71, blot) * max(1.0 - shade * shadeContrast, 0.0);
  
  //Color
  vec4 fragColor = flow * blot;

  gl_FragColor = vec4(vec3(fragColor) * vec3(0.0), fragColor.a);
  gl_FragColor = vec4(vec3(flow) * uTheme, flow.a);
  // gl_FragColor = flow;
}
