// uniform float time;
// uniform vec2 uRes;
// uniform float anim;
// uniform sampler2D flowmap;
// varying vec2 vUv;

// vec3 hash3(in vec3 p) {
//   vec3 q = vec3(dot(p, vec3(127.1, 311.7, 189.2)),
//                 dot(p, vec3(269.5, 183.3, 324.7)),
//                 dot(p, vec3(419.2, 371.9, 128.5)));
//   return fract(sin(q) * 43758.5453);
// }

// float noise(in vec3 x, float v) {
//   // adapted from IQ's 2d voronoise:
//   // http://www.iquilezles.org/www/articles/voronoise/voronoise.htm
//   vec3 p = floor(x);
//   vec3 f = fract(x);

//   float s = 1.0 + 31.0 * v;
//   float va = 0.0;
//   float wt = 0.0;
//   for (int k=-2; k<=1; k++)
//   for (int j=-2; j<=1; j++)
//   for (int i=-2; i<=1; i++) {
//       vec3 g = vec3(float(i), float(j), float(k));
//       vec3 o = hash3(p + g);
//       vec3 r = g - f + o + 0.5;
//       float d = dot(r, r);
//       float w = pow(1.0 - smoothstep(0.0, 1.414, sqrt(d)), s);
//       va += o.z * w;
//       wt += w;
//     }
//     return va / wt;
// }


// float fBm(in vec3 p, float v) {
//   float sum = 0.0;
//   float amp = 1.0;
//   for(int i = 0; i < 1; i++) {
//       sum += amp * noise(p, v);
//       amp *= 0.5;
//       p *= 2.0;
//   }
//   return sum;
// }


// void main() {
//   vec2 p = gl_FragCoord.xy / uRes.xy - .5;

//   vec4 flow = texture2D(flowmap, vUv);
//   p += flow.x;

//   vec3 rd = normalize(vec3(p, 1.0));
//   vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;

//   vec3 col = vec3(0.067,0.173,0.537) * fBm(pos, 1.);

//   gl_FragColor = vec4(mix(vec3(0.067,0.173,0.537), col, anim), 1.);
// }

// -----------

// #define nSteps 64
// #define PI 3.141592
// #define dog 0.25

// #define cm_A vec3(0.5, 0.5, 0.5)
// #define cm_B vec3(0.5, 0.5, 0.5)
// #define cm_C vec3(1.0, 1.0, 0.5)
// #define cm_D vec3(0.8, 0.9, 0.3)

// uniform float time;
// uniform vec2 uRes;
// uniform float anim;
// uniform sampler2D flowmap;
// varying vec2 vUv;

// vec2 rotate2D(vec2 _st, float _angle)
// {
// 	_st -= 0.5;
//     _st = mat2(
//         cos(_angle),-sin(_angle),
//         sin(_angle),cos(_angle)
//     ) * _st;
//     _st += 0.5;
    
//     return _st;
// }

// float ring(float e0, float d, float f)
// {
//     return smoothstep(e0, e0 + d, f) - smoothstep(e0 + d, e0 + 2. * d, f);
// }

// vec3 colormap(float t)
// {
//     return cm_A + cm_B * cos(2.0 * PI * (cm_C * t + cm_D));
// }

// vec3 hash3(in vec3 p) {
//   vec3 q = vec3(dot(p, vec3(127.1, 311.7, 189.2)),
//                 dot(p, vec3(269.5, 183.3, 324.7)),
//                 dot(p, vec3(419.2, 371.9, 128.5)));
//   return fract(sin(q) * 43758.5453);
// }

// float noise(in vec3 x, float v) {
//   // adapted from IQ's 2d voronoise:
//   // http://www.iquilezles.org/www/articles/voronoise/voronoise.htm
//   vec3 p = floor(x);
//   vec3 f = fract(x);

//   float s = 1.0 + 31.0 * v;
//   float va = 0.0;
//   float wt = 0.0;
//   for (int k=-2; k<=1; k++)
//   for (int j=-2; j<=1; j++)
//   for (int i=-2; i<=1; i++) {
//       vec3 g = vec3(float(i), float(j), float(k));
//       vec3 o = hash3(p + g);
//       vec3 r = g - f + o + 0.5;
//       float d = dot(r, r);
//       float w = pow(1.0 - smoothstep(0.0, 1.414, sqrt(d)), s);
//       va += o.z * w;
//       wt += w;
//     }
//     return va / wt;
// }


// float fBm(in vec3 p, float v) {
//   float sum = 0.0;
//   float amp = 1.0;
//   for(int i = 0; i < 1; i++) {
//       sum += amp * noise(p, v);
//       amp *= 0.5;
//       p *= 2.0;
//   }
//   return sum;
// }

// vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
// vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
// vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

// float cnoise(vec2 P){
//   vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
//   vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
//   Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
//   vec4 ix = Pi.xzxz;
//   vec4 iy = Pi.yyww;
//   vec4 fx = Pf.xzxz;
//   vec4 fy = Pf.yyww;
//   vec4 i = permute(permute(ix) + iy);
//   vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
//   vec4 gy = abs(gx) - 0.5;
//   vec4 tx = floor(gx + 0.5);
//   gx = gx - tx;
//   vec2 g00 = vec2(gx.x,gy.x);
//   vec2 g10 = vec2(gx.y,gy.y);
//   vec2 g01 = vec2(gx.z,gy.z);
//   vec2 g11 = vec2(gx.w,gy.w);
//   vec4 norm = 1.79284291400159 - 0.85373472095314 * 
//     vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
//   g00 *= norm.x;
//   g01 *= norm.y;
//   g10 *= norm.z;
//   g11 *= norm.w;
//   float n00 = dot(g00, vec2(fx.x, fy.x));
//   float n10 = dot(g10, vec2(fx.y, fy.y));
//   float n01 = dot(g01, vec2(fx.z, fy.z));
//   float n11 = dot(g11, vec2(fx.w, fy.w));
//   vec2 fade_xy = fade(Pf.xy);
//   vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
//   float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
//   return 2.3 * n_xy;
// }

// float map(float value, float low1, float high1, float low2, float high2) {
//     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }

// void main()
// {
//     // Normalize uv and account for aspect ratio
//     vec2 uv = gl_FragCoord.xy / uRes.xy;
//     float ar = uRes.x / uRes.y;
//     uv.x = (uv.x - 0.5) * ar + 0.5;

//     // Preserve original uv
//     vec2 p = uv;
//     float t = time * 0.75;
//     vec3 col = vec3(0.0);

//     vec3 rd = normalize(vec3(p, 1.0));
//     vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;

//     float n = cnoise(vec2(time, time));
//     n = map(n, -1., 1., 0., 1.);
    
//     float cos_t = cos(t * 0.34);
//     cos_t *= 64.0;
    
//     p = p - 0.5;
//     p *= 1.35;
    
//     vec2 polar;
//     polar.x = length(dot(p, p));
//     polar.y = atan(p.y, p.x) + PI;
    
//     float rads = polar.y;
    
//     for(int i = 0; i < nSteps; ++i)
//     {
//         float rd = float(i+1) / float(nSteps);
//         float ring_x = sin(rads * 3. + rd * cos_t) - 2.0;
//         float f = ring(0.01, 0.5, polar.x + ring_x);
        
//         col += vec3(f);
        
//         polar.x *= 1.2;
//     }
//     col *= .5;

//     // col = vec3(0.067,0.173,0.537) * fBm(col, 0.);
//     // gl_FragColor = vec4(mix(vec3(0.067,0.173,0.537), col, anim), 1.);
//     gl_FragColor = vec4(col, 1.0);
// }

// -----

// precision highp float;

// uniform float time;
// uniform vec2 uRes;
// uniform float anim;
// uniform sampler2D flowmap;
// varying vec2 vUv;

// const float MATH_PI	= 3.14159265359 ;

// vec2 Rotate( vec2 p, float a ) 
// {
// 	return cos( a ) * p + sin( a ) * vec2( p.y, -p.x );
// }

// float sat( float x )
// {
// 	return clamp( x, 0.0, 1.0 );
// }

// vec3 hash3(in vec3 p) {
//   vec3 q = vec3(dot(p, vec3(127.1, 311.7, 189.2)),
//                 dot(p, vec3(269.5, 183.3, 324.7)),
//                 dot(p, vec3(419.2, 371.9, 128.5)));
//   return fract(sin(q) * 43758.5453);
// }

// float noise(in vec3 x, float v) {
//   // adapted from IQ's 2d voronoise:
//   // http://www.iquilezles.org/www/articles/voronoise/voronoise.htm
//   vec3 p = floor(x);
//   vec3 f = fract(x);

//   float s = 1.0 + 31.0 * v;
//   float va = 0.0;
//   float wt = 0.0;
//   for (int k=-2; k<=1; k++)
//   for (int j=-2; j<=1; j++)
//   for (int i=-2; i<=1; i++) {
//       vec3 g = vec3(float(i), float(j), float(k));
//       vec3 o = hash3(p + g);
//       vec3 r = g - f + o + 0.5;
//       float d = dot(r, r);
//       float w = pow(1.0 - smoothstep(0.0, 1.414, sqrt(d)), s);
//       va += o.z * w;
//       wt += w;
//     }
//     return va / wt;
// }


// float fBm(in vec3 p, float v) {
//   float sum = 0.0;
//   float amp = 1.0;
//   for(int i = 0; i < 1; i++) {
//       sum += amp * noise(p, v);
//       amp *= 0.5;
//       p *= 2.0;
//   }
//   return sum;
// }

// vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
// vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
// vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

// float cnoise(vec2 P){
//   vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
//   vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
//   Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
//   vec4 ix = Pi.xzxz;
//   vec4 iy = Pi.yyww;
//   vec4 fx = Pf.xzxz;
//   vec4 fy = Pf.yyww;
//   vec4 i = permute(permute(ix) + iy);
//   vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
//   vec4 gy = abs(gx) - 0.5;
//   vec4 tx = floor(gx + 0.5);
//   gx = gx - tx;
//   vec2 g00 = vec2(gx.x,gy.x);
//   vec2 g10 = vec2(gx.y,gy.y);
//   vec2 g01 = vec2(gx.z,gy.z);
//   vec2 g11 = vec2(gx.w,gy.w);
//   vec4 norm = 1.79284291400159 - 0.85373472095314 * 
//     vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
//   g00 *= norm.x;
//   g01 *= norm.y;
//   g10 *= norm.z;
//   g11 *= norm.w;
//   float n00 = dot(g00, vec2(fx.x, fy.x));
//   float n10 = dot(g10, vec2(fx.y, fy.y));
//   float n01 = dot(g01, vec2(fx.z, fy.z));
//   float n11 = dot(g11, vec2(fx.w, fy.w));
//   vec2 fade_xy = fade(Pf.xy);
//   vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
//   float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
//   return 2.3 * n_xy;
// }

// float map(float value, float low1, float high1, float low2, float high2) {
//     return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
// }

// void main()
// {    
//   vec2 p = ( 2.0 * gl_FragCoord.xy - uRes.xy ) / uRes.x * 1000.0;

//   vec4 flow = texture2D(flowmap, vUv);

//   float n = cnoise(vec2(time * 0.5, time * 0.5));
//   float maxRadius = 50.; //map(n , -1., 1., 10., 60.);
//   float noise01 = map(n , -1., 1., 0.5, 2.);
//   float noiseNbCircle = map(n , -1., 1., 16., 16.);
//   float tt = time + n * 5.5;
  
//   float sdf = 1e6;
//   float dirX = 0.0;
//   for ( float iCircle = 1.0; iCircle < 16.0 * 4.0 - 1.0; ++iCircle )
//   {
//       float circleN = iCircle / ( 16.0 * 4.0 - 1.0 );
//       float t = fract( circleN + tt * 0.2 );
      
//       float offset = -180.0 - 330.0 * t;
//       float angle  = fract( iCircle / 16.0 + tt * 0.01 + circleN / 8.0 );
//       float radius = mix( maxRadius, 0.0, 1.0 - sat( 1.2 * ( 1.0 - abs( 2.0 * t - 1.0 ) ) ) );

//       offset *= noise01;
//       radius *= noise01;
      
//       vec2 p2 = p;
//       p2 = Rotate( p, -angle * 2.0 * MATH_PI );
//       p2 += vec2( -offset, 0.0 );
      
//       float dist = length( p2 ) - radius;
//       if ( dist < sdf )
//       {
//           dirX = p2.x / radius;
//           sdf	 = dist;
//       }
//   }
  
//   vec3 colorA = vec3(17.085, 44.115, 136.935); //vec3( 24, 30, 28 );
//   vec3 colorB = vec3( 249, 249, 249 );
  
//   vec3 abberr = colorB;
// 	abberr = mix( abberr, vec3( 205, 80, 28 ), sat( dirX ) );
//   abberr = mix( abberr, vec3( 38, 119, 208 ), sat( -dirX ) );
  
//   colorB = mix( colorB, abberr, smoothstep( 0.0, 1.0, ( sdf + 5.0 ) * 0.1 ) );
  
//   vec3 color = mix( colorA, colorB, vec3( 1.0 - smoothstep( 0.0, 1.0, sdf * 0.3 ) ) );
//   color = color /255.0;

//   color = vec3(0.067,0.173,0.537) * fBm(color, .0) * 3.5;
//   gl_FragColor = vec4(mix(vec3(0.067,0.173,0.537), color, anim), 1.);
//   // gl_FragColor = flow;
// }

// -----

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define PHI 1.61803398874989484820459


#define randomIndex 1. // random from js
#define sensibleSquares 5. // zoom sort of depends on # of colors so we get that from p5
#define grainIndex 0.1 // user input
#define chaosFactor 0.1 // user input
#define scaleFactor 1. // user input
#define tuning 1. // we don't know what this does yet.
#define largeCanvas true // this is true if we're in the pro version AND if the person has disabled "classic mode"

uniform float time;
uniform float anim;
uniform sampler2D flowmap;

// our texcoords from the vertex shader
varying vec2 vUv;
// the texture that we want to manipulate
uniform sampler2D tex0; // colors

// In this example we care about where on the canvas the pixel is, so we need to know the size of the canvas.
// This is passed in as a uniform from the sketch.js file.
uniform vec2 uRes; // this includes device ratio!

// uniform float randomIndex; // random from js
// uniform float sensibleSquares; // zoom sort of depends on # of colors so we get that from p5
// uniform float grainIndex; // user input
// uniform float chaosFactor; // user input
// uniform float scaleFactor; // user input
// uniform float tuning; // we don't know what this does yet.
// uniform bool largeCanvas; // this is true if we're in the pro version AND if the person has disabled "classic mode"

highp float rand(vec2 co) // we OWE OUR LIFE to aman from the shaders discord! 
// http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
{
    highp float a = 12.9898;
    highp float b = 78.183;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

highp vec2 random2Alt(vec2 p) {
  return vec2(rand(p + vec2(1.+(floor(randomIndex * 30.)), 1.)), rand(p));
}

vec4 randomColor (vec2 st_i, sampler2D tex) {
  vec2 point = random2Alt(st_i);
  // the texture input is a just a processing sketch with a few colors in rectangles
  return texture2D(tex, point);;
}

// rotate stolen from book basically
mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float noise(vec2 st) {
  vec2 st_f = fract(st + randomIndex);
  vec2 st_i = floor(st + randomIndex);
  
  float option1 = rand(st_i);
  float option2 = rand(st_i + vec2(1.0, 0.0));
  float option3 = rand(st_i + vec2(0.0, 1.0));
  float option4 = rand(st_i + vec2(1.0, 1.0));
  
  vec2 u = smoothstep(0., 1. , st_f);
  // Mix 4 coorners percentages
  return mix(option1, option2, u.x) +
          (option3 - option1)* u.y * (1.0 - u.x) +
          (option4 - option2) * u.x * u.y;
}


float getConstrained(vec2 xy) {
  float val = noise(xy);
  xy *= rotate2d(1.0 + tuning * PI);
  val += (noise(xy) - 0.5);
  return val;
}

vec2 gradientNoise(vec2 st) {
  st = (st / 5.) / scaleFactor;
  return vec2(getConstrained(st), getConstrained(st * rotate2d(1.0 + randomIndex * PI)));
}

// this is its own thing -- takes in coordinates and texture, returns a color adjusted version
vec4 noisedImage(vec2 xy) {
  xy *= 0.4;
  float constrained = largeCanvas ? getConstrained(xy / scaleFactor) : rand(xy * 5.);
  constrained -= 0.5;
  constrained *= grainIndex; 
  return vec4(vec3(constrained), 1.0);
}

vec4 whatColor(vec2 st) {
  st *= sensibleSquares; // TEMPORARILY CHANGING
  st *= rotate2d(randomIndex * 15. * PI);

  vec2 topCorner = floor(st);

  vec2 rightCorner = topCorner + vec2(1.0, 0.0);
  vec2 downCorner = topCorner + vec2(0.0, 1.0);
  vec2 acrossCorner = topCorner + vec2(1.0, 1.0);

  vec4 color1 = randomColor(topCorner, tex0);
  vec4 color2 = randomColor(rightCorner, tex0);
  vec4 color3 = randomColor(downCorner, tex0);
  vec4 color4 = randomColor(acrossCorner, tex0);
  
  vec2 st_f = fract(st);
  // vec2 u = step(0.5, st_f);
  vec2 u = smoothstep(0., 1. , st_f);

  vec4 topColor = mix(color1, color2, u.x);
  vec4 bottomColor = mix(color3, color4, u.x);

  return mix(topColor, bottomColor, u.y);
}

vec2 warp(in vec2 st) {  
  vec2 adjusted_st = st + (vec2(randomIndex, 1.));
  
  adjusted_st.x += adjusted_st.x * (sin(adjusted_st.x + (PI / 2.)));
  adjusted_st.y += adjusted_st.y * sin(adjusted_st.y);

  return adjusted_st;
}

void main() {
  vec2 uv = vertexTextureCoordinate;
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  uv.y = 1.0 - uv.y;

  vec4 grain = noisedImage(st * rotate2d(randomIndex * 5. * PI));

  vec2 warped_st = warp(st);
  // vec2 warped_st = st;
  vec2 offset = largeCanvas ? (gradientNoise(st)) : random2Alt(warped_st);
  offset -= vec2(0.5, 0.5);

  vec2 chaosified = warped_st + (offset * chaosFactor);
  vec4 chaosGradient = whatColor(chaosified);

  // vec4 testGradNoise = vec4(.xy, 0., 1.);
  // gl_FragColor = grain + vec4(0.5, 0.5, 0.5, 0);
  // gl_FragColor = chaosGradient;
  
  gl_FragColor = vec4((chaosGradient.rgb + grain.rgb), 1.0);
}
