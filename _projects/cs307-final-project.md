---
layout: single
title: Carousel Graphics Scene
date: 2021-03-29 00:04:20 -0000
toc: true
excerpt: "Animated and interactive 3D carousel music box developed with Three.js."
---

[Final Project!][project]{: .btn .btn--info}
[Repo][repo]{: .btn .btn--inverse}
[Class Assignments][assignments]{: .btn .btn--inverse}

## Overview

### Background

For my final project in Wellesley's computer graphics course ([CS 307][cs307]), I collaborated with a classmate (Isa Lie '23) on creating a 3D graphics scene with an interactive, animated carousel music box using JavaScript. The goal of this project was to leverage the computer graphics concepts we learned throughout the course to create a graphics scene that went beyond the complexity and scope of the assignments. The project was broken up into three stages: a [first draft][draft], [alpha version][alpha], and [final version][project].

### Scene Description

Our scene consists of an animated carousel music box from complex geometries that users can interact with by winding up the box and releasing the handle, which plays music. Some other components include texture mapped backgrounds (i.e. wooden floor and sky dome) and various lights (i.e. ambient, directional, spotlights) that can be toggled on/off with the light switch.

<figure class="half">
  <a href="/assets/images/carousel-lights-off.png"><img src="/assets/images/carousel-lights-off.png"></a>
  <a href="/assets/images/carousel-lights-on.png"><img src="/assets/images/carousel-lights-on.png"></a>
</figure>

## Graphics Concepts

### Modeling

We used a variety of curves, surfaces, and geometries to model our scene. In addition, we implemented a hierarchical structure with creating meshes, adding them to objects, and building on top of these objects. To further challenge ourselves, we used some Three.js geometries that required us to create our own paths or Bezier curves, which are described in further detail under the [Curved Surfaces section](#curved-surfaces).

### Material, Lighting, and Shading

We used Phong material for all of our components, and added shininess and specular properties to the handle and music box base to create a metallic appearance. For lighting, we used generic ambient and directional lights positioned at the top of the scene, a spotlight for each horse, and point lights for the light decorations on the tent.

Code snippet of math calculations and adding a point light to the planet decoration:

{% highlight javascript %}
var x = decParams.decHeight/2 * Math.cos(Math.PI/3);
var y = decParams.decHeight/2 * Math.sin(Math.PI/6);
planetLight = new THREE.PointLight("white", 0.2, 0, 2);
planetLight.position.set(carouselParams.tentRadius/2 + x, carouselParams.platformHeight + carouselParams.centerHeight
  + decParams.decHeight/2, carouselParams.tentRadius/2 - y);
{% endhighlight %}

### Camera

We used a perspective camera and established the vertical field of view, aspect ratio, near, and far plane parameters. Additionally, we used the `lookAt()` function to initially face the camera at a certain point in the scene. Setting up a camera was essential, as the raycaster in our user interaction component depended on both the camera and mouse position.

### Textures and Texture Mapping

We used loaded images to texture map for the wooden floor and the sky background. The wooden floor uses repeated wrapping, and the sky background uses mirror repeated wrapping to create a smooth transition between the repeated sky images.

Code snippet of texture mapping for the sky background:

{% highlight javascript %}
skyMaterial = new THREE.MeshPhongMaterial({
  color: "lightblue",
  map: textures[1],
  side: THREE.DoubleSide
});
textures[1].wrapS = THREE.MirroredRepeatWrapping;
textures[1].repeat.set(2, 1);
textures[1].needsUpdate = true;
{% endhighlight %}

### Curved Surfaces

We used several complicated geometries to create our more detailed components, such as `TubeRadialGeometry` for the horses' manes, `ExtrudeGeometry` for the moon light, and `TubeGeometry` for the handle. These geometries required us to create our own Bezier curves using vectors or specify settings to control depth and bevel thickness.

Code snippet of using Bezier curves and `TubeGeometry` to create a handle geometry:

{% highlight javascript %}
var path = new THREE.CubicBezierCurve3(
  new THREE.Vector3(40, -20, 0),
  new THREE.Vector3(10, -20, 0),
  new THREE.Vector3(35, 0, 0),
  new THREE.Vector3(0, 0, 0)
);
var handleGeom = new THREE.TubeGeometry( path, 20, 2, 8, false );
{% endhighlight %}

### Transparency

The light bulb at the top of the tent and light decorations make use of the opacity property to create a more realistic glass appearance.

### User Interaction

We implemented user interaction in multiple areas. For example, by clicking the light switch, the switch moves and the user can turn on and off the carousel light decorations. This was accomplished by declaring the lights controlled by the light switch as global variables, then using multiple helper functions to control their presence and visibility in the scene. Users can also interact with the music box upon clicking the spinning handle to trigger the animation, which is explained in more detail under the [Animation section](#animation).

Code snippet of light switch user interaction:

{% highlight javascript %}
raycaster.setFromCamera(mouse, camera);
var intersects = raycaster.intersectObjects(scene.children, true);
if (intersects.length > 0) {
  if (intersects[0].object.name == "switch") {
    changeLight();
    renderer.render(scene, camera);
  };
}
{% endhighlight %}

### Animation

To model a real music box, users can press 'w' to "wind up" the mechanism, allowing the carousel to freely spin upon releasing the handle. This involved 3 variables, `windStepCycle`, `currentStep`, and `total`. While incrementing the `currentStep` and `total` variables by one with the advancement of each frame, each time the user winds up the handle, the handle and carousel slowly rotate counter-clockwise until reaching a certain number of frames (established as our `windStepCycle` constant). Then, pushing 'r' emulates releasing the handle, causing the handle and carousel spin faster and clockwise until the total variable is reset to 0.

Code snippet of key wind-up animation:

{% highlight javascript %}
oneStep();
if (spinParams.step > spinParams.wind) {
  stopAnimation();
} else {
  animationID = requestAnimationFrame(animate);
}
{% endhighlight %}

## Technology & Tools

### Languages

<div class="tech-logos">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
</div>

### References

* [Three.js][three-js]: JavaScript API built on top of [WebGL][webgl] that helps users easily model and render graphics
* [TW module][tw]: Professor Scott Anderson's custom API layered on top of Three.js to package common operations
* [CS 307 website][cs307]: enrolled in Spring 2021, instructed by Professor Ellen Hildreth
  
[project]:     https://peyton-a-wang.github.io/cs307-wellesley-cg/project-final/final-scene.html
[repo]:        https://github.com/peyton-a-wang/cs307-wellesley-cg/tree/master/project-final
[assignments]: https://peyton-a-wang.github.io/cs307-wellesley-cg/
[draft]:       https://peyton-a-wang.github.io/cs307-wellesley-cg/hw4/hwk4-creative-scene.html
[alpha]:       https://peyton-a-wang.github.io/cs307-wellesley-cg/project-alpha/demo.html
[three-js]:    https://threejs.org/
[webgl]:       https://registry.khronos.org/webgl/specs/latest/2.0/
[tw]:          https://cs.wellesley.edu/~cs307/threejs/libs/tw-documented.shtml
[cs307]:       https://cs.wellesley.edu/~cs307/
