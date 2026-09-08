# Historical Spatial Engine

Darwin Harbour is a historical spatial environment connecting geography, chronology, movement, evidence and narrative.

## Runtime

Primary runtime:

**CesiumJS**

Cesium owns:
- coordinates
- world space
- camera
- time
- terrain
- 3D Tiles
- historical object placement

Use custom restrained cartography.

Hide default Cesium chrome from the visitor.

## Architecture

Prefer one persistent viewer for the Story chapter.

Drive it with structured story state.

A beat may define:
- historical time
- camera destination
- camera target
- heading
- pitch
- roll
- altitude
- transition duration/easing
- visible entities
- aircraft formations
- vessel states
- highlighted locations
- historical imagery/map layer
- archive reference
- annotation state
- sound state
- evidence confidence
- reduced-motion composition

## Camera

Preferred rhythm:

**scroll → transition → composition → read**

Avoid uncontrolled continuous camera spinning.

## Aircraft

Use:
- instancing for formations;
- lightweight distant models;
- higher-detail hero models only near camera;
- compressed textures;
- sensible material counts.

Associate position/orientation/time with sources and confidence.

Do not invent false precision.

## Historical layers

Georeference historical maps/aerials where evidence allows.

Blend them over current coordinates.

Label reconstruction/interpretation.

## Fallback

Core meaning must survive:
- reduced motion;
- WebGL failure;
- low-end devices;
- slow networks.
