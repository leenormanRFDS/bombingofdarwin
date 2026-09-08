# Skill: Spatial Story

Use for Cesium, cartographic storytelling, aircraft/vessel positioning, camera choreography and spatial scrollytelling.

Lead: Experience.
Required support: Truth + Technology. Add Design for visible UI/composition changes.

Workflow:
1. Define the visitor outcome in one sentence.
2. Identify required historical facts.
3. Read canonical/history/entity data.
4. Classify spatial certainty: VERIFIED / APPROXIMATE / INFERRED / UNKNOWN.
5. Never turn approximate/unknown data into false precision.
6. Read `docs/SPATIAL_ENGINE.md`.
7. Define/modify structured `data/story-beats.json` before scattering animation values through components.
8. Design the final camera composition first, then the transition.
9. Use Cesium for world coordinates/time; semantic HTML for narrative.
10. Use LOD/instancing for repeated aircraft.
11. Implement reduced-motion/static fallback.
12. Test desktop/mobile/resize/navigation/fallback.
13. Confirm key meaning survives without 3D.
14. Stop at the requested outcome.

Reject default Cesium chrome, game HUDs, invented exact flight paths, uncontrolled camera spinning and spectacle-only 3D.
