precision highp float;

out highp vec4 gFlowMap;

uniform sampler2D tMap;
uniform float uFalloff;
uniform float uAlpha;
uniform float time;
uniform float uDissipation;
uniform vec2 uRes;
uniform float uVisible;

uniform vec2 uMouse;

#include <packing>

in vec2 vUv;

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

float fbm(vec3 p)
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

void main() {
    // vec4 color = texture2D(tMap, vUv ) * uDissipation;

    // vec2 cursor = vUv - uMouse * uVisible;
    // cursor.x *= uRes.x / uRes.y;

    // vec3 stamp = vec3(1. * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(1.)), 3.0));
    // float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;
    // color.rgb = mix(color.rgb, stamp, falloff);
    // float alpha = color.r + color.g + color.b;

    // gFlowMap = vec4(color.rgb, alpha);
    // // gFlowMap = vec4(color.rgb, 1.);


    vec2 p = gl_FragCoord.xy / uRes.xy - .5;
    vec3 rd = normalize(vec3(p, 1.0));
    vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;
    float f = fbm(pos);
    vec3 col = vec3(0.067,0.173,0.537) * fbm(pos);

    vec4 color = texture2D(tMap, vUv ) * uDissipation;
    vec2 cursor = vUv - uMouse * uVisible;
    cursor.x *= uRes.x / uRes.y;

    vec3 stamp = vec3(1. * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(1.)), 3.0));
    float falloff = smoothstep(uFalloff, 0.0, length(cursor) / f) * uAlpha;
    color.rgb = mix(color.rgb, vec3(1.0), falloff);
    float alpha = color.r + color.g + color.b;

    gFlowMap = vec4(color.rgb, alpha);
    // gFlowMap = vec4(color.rgb, 1.);
}
