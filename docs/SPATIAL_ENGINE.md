# Historical Spatial Engine

Darwin Harbour is a historical spatial environment connecting geography, chronology, movement, evidence and narrative.

## Runtime
Primary runtime: CesiumJS.
Cesium owns coordinates, world space, camera, time, terrain, 3D Tiles and historical object placement.
Use custom restrained cartography. Hide default Cesium chrome from the visitor.

## Architecture
Prefer one persistent viewer for the Story chapter.
Drive it with structured story state.

A beat may define historical time, camera, heading/pitch/altitude, transition, visible entities, formations, vessels, highlighted locations, historic imagery, archive refs, annotations, sound, evidence confidence and reduced-motion composition.

## Camera
Preferred rhythm:
scroll → transition → composition → read.

Avoid uncontrolled continuous camera spinning.

## Aircraft
Use instancing for formations, lightweight distant models and higher-detail hero models only near camera. Associate position/orientation/time with sources and confidence. Do not invent false precision.

## Historical layers
Georeference historical maps/aerials when evidence allows and blend them over current coordinates. Label reconstruction/interpretation.

## Fallback
Core meaning must survive reduced motion, WebGL failure, low-end devices and slow networks.
