// // These are necessary definitions that let you graphics card know how to render the shader
// #ifdef GL_ES
// precision mediump float;
// #endif

// #define PI 3.14159265359
// #define PHI 1.61803398874989484820459

// #define randomIndex 1. // random from js
// #define sensibleSquares 5. // zoom sort of depends on # of colors so we get that from p5
// #define grainIndex 0.1 // user input
// #define chaosFactor 0.1 // user input
// #define scaleFactor .01 // user input
// #define tuning 1.0 // we don't know what this does yet.
// #define largeCanvas true // this is true if we're in the pro version AND if the person has disabled "classic mode"

// uniform float time;
// uniform float anim;
// uniform sampler2D flowmap;

// // our texcoords from the vertex shader
// varying vec2 vUv;
// // the texture that we want to manipulate
// uniform sampler2D tex0; // colors

// // In this example we care about where on the canvas the pixel is, so we need to know the size of the canvas.
// // This is passed in as a uniform from the sketch.js file.
// uniform vec2 uRes; // this includes device ratio!

// // uniform float randomIndex; // random from js
// // uniform float sensibleSquares; // zoom sort of depends on # of colors so we get that from p5
// // uniform float grainIndex; // user input
// // uniform float chaosFactor; // user input
// // uniform float scaleFactor; // user input
// // uniform float tuning; // we don't know what this does yet.
// // uniform bool largeCanvas; // this is true if we're in the pro version AND if the person has disabled "classic mode"

// highp float rand(vec2 co) // we OWE OUR LIFE to aman from the shaders discord!
// // http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
// {
//     highp float a = 12.9898;
//     highp float b = 78.183;
//     highp float c = 43758.5453;
//     highp float dt= dot(co.xy ,vec2(a,b));
//     highp float sn= mod(dt,3.14);
//     return fract(sin(sn) * c);
// }

// highp vec2 random2Alt(vec2 p) {
//   return vec2(rand(p + vec2(1.+(floor(randomIndex * 30.)), 1.)), rand(p));
// }

// vec4 randomColor (vec2 st_i, sampler2D tex) {
//   vec2 point = random2Alt(st_i);
//   // the texture input is a just a processing sketch with a few colors in rectangles
//   return texture2D(tex, point);;
// }

// // rotate stolen from book basically
// mat2 rotate2d(float _angle){
//     return mat2(cos(_angle),-sin(_angle),
//                 sin(_angle),cos(_angle));
// }

// float noise(vec2 st) {
//   vec2 st_f = fract(st + randomIndex);
//   vec2 st_i = floor(st + randomIndex);

//   float option1 = rand(st_i);
//   float option2 = rand(st_i + vec2(1.0, 0.0));
//   float option3 = rand(st_i + vec2(0.0, 1.0));
//   float option4 = rand(st_i + vec2(1.0, 1.0));

//   vec2 u = smoothstep(0., 1. , st_f);
//   // Mix 4 coorners percentages
//   return mix(option1, option2, u.x) +
//           (option3 - option1)* u.y * (1.0 - u.x) +
//           (option4 - option2) * u.x * u.y;
// }

// float getConstrained(vec2 xy) {
//   float val = noise(xy);
//   xy *= rotate2d(1.0 + tuning * PI);
//   val += (noise(xy) - 0.5);
//   return val;
// }

// vec2 gradientNoise(vec2 st) {
//   st = (st / 5.) / scaleFactor;
//   return vec2(getConstrained(st), getConstrained(st * rotate2d(1.0 + randomIndex * PI)));
// }

// // this is its own thing -- takes in coordinates and texture, returns a color adjusted version
// vec4 noisedImage(vec2 xy) {
//   xy *= 0.4;
//   float constrained = largeCanvas ? getConstrained(xy / scaleFactor) : rand(xy * 5.);
//   constrained -= 0.5;
//   constrained *= grainIndex;
//   return vec4(vec3(constrained), 1.0);
// }

// vec4 whatColor(vec2 st, vec4 color) {
//   st *= sensibleSquares; // TEMPORARILY CHANGING
//   st *= rotate2d(randomIndex * 15. * PI);

//   vec2 topCorner = floor(st);

//   vec2 rightCorner = topCorner + vec2(1.0, 0.0);
//   vec2 downCorner = topCorner + vec2(0.0, 1.0);
//   vec2 acrossCorner = topCorner + vec2(1.0, 1.0);

//   vec4 color1 = vec4(1.0, 0.0, 0.0, 1.0); //color; //randomColor(topCorner, tex0);
//   vec4 color2 = vec4(0.0, 1.0, 0.0, 1.0); //color; //randomColor(rightCorner, tex0);
//   vec4 color3 = vec4(0.0, 0.0, 1.0, 1.0); //color; //randomColor(downCorner, tex0);
//   vec4 color4 = vec4(1.0, 1.0, 0.0, 1.0); //color; //randomColor(acrossCorner, tex0);

//   vec2 st_f = fract(st);
//   // vec2 u = step(0.5, st_f);
//   vec2 u = smoothstep(0., 1. , st_f);

//   vec4 topColor = mix(color1, color2, u.x);
//   vec4 bottomColor = mix(color3, color4, u.x);

//   return mix(topColor, bottomColor, u.y);
// }

// vec2 warp(in vec2 st) {
//   vec2 adjusted_st = st + (vec2(randomIndex, 1.));

//   adjusted_st.x += adjusted_st.x * (sin(adjusted_st.x + (PI / 2.)));
//   adjusted_st.y += adjusted_st.y * sin(adjusted_st.y);

//   return adjusted_st;
// }

// float draw_rectangle(vec2 coord, vec2 dimensions, vec2 offset) {
//     vec2 shaper = vec2(step(offset.x, coord.x), step(offset.y, coord.y));
//     shaper *= vec2(step(coord.x, offset.x + dimensions.x), step(coord.y, offset.y + dimensions.y));

//     return shaper.x * shaper.y;
// }

// void main()
// {

//   vec3 colors[5] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), vec3(1.0, 0.0, 1.0));
//   int colorsLength = colors.length();
//   vec2 dimensionsColumn = vec2(1. / float(colorsLength), vUv.y);
//   vec2 coord = gl_FragCoord.xy / uRes;
//   float rectangle = 0.0;
//   vec4 color = vec4(0.0);
//   for(int i=0; i<colorsLength; ++i)
//   {
//     rectangle = draw_rectangle(coord, dimensionsColumn, vec2(float(i) / float(colorsLength), 0.0));
//     color += vec4(rectangle * colors[i], 1.0);
//   }
//   gl_FragColor = vec4(color);
//   // ---

//   // vec2 uv = vUv;
//   // vec2 st = gl_FragCoord.xy/uRes.xy;
//   // uv.y = 1.0 - uv.y;

//   // vec4 grain = noisedImage(st * rotate2d(randomIndex * 5. * PI));

//   // vec2 warped_st = warp(st);
//   // // vec2 warped_st = st;
//   // vec2 offset = largeCanvas ? (gradientNoise(st)) : random2Alt(warped_st);
//   // offset -= vec2(0.5, 0.5);

//   // vec2 chaosified = warped_st + (offset * chaosFactor);
//   // vec4 chaosGradient = whatColor(chaosified, color);

//   // // vec4 testGradNoise = vec4(.xy, 0., 1.);
//   // // gl_FragColor = grain + vec4(0.5, 0.5, 0.5, 0);
//   // // gl_FragColor = chaosGradient;

//   // gl_FragColor = vec4((chaosGradient.rgb + grain.rgb), 1.0);
//   // // gl_FragColor = vec4(chaosGradient.rgb, 1.0);
// }
