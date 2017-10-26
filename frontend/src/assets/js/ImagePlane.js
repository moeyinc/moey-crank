class ImagePlane extends THREE.Object3D {
  constructor (meshFront, meshBack, planeIndex, angle) {
    super()
    super.add(meshFront)
    super.add(meshBack)

    this.name = 'ImagePlane'
    this.planeIndex = planeIndex
    this.currentAngle = angle
    this.isRotating = false
    this.rotationStartedAt = this.currentAngle
    this.totalAngleToRotate = 0.0
    this.rotationSpeed = 10.0
    this.rotationDirection = 1
  }

  update () {
    if (this.isRotating) this.rotate()
  }

  draw () {
    this.rotation.x = this.currentAngle
  }

  addAngleToRotate (angle) {
    this.totalAngleToRotate += angle
    this.isRotating = true
  }

  rotate () {
    // change the angle at every frame
    this.currentAngle += this.rotationDirection * this.rotationSpeed

    // check if it reaches the target position
    if (Math.abs(this.currentAngle - this.rotationStartedAt) >= Math.abs(this.totalAngleToRotate)) {
      // correction for the precise angle
      this.currentAngle = this.rotationStartedAt + this.rotationDirection * this.totalAngleToRotate

      // rotation is done
      this.isRotating = false

      // reset the starting position
      this.rotationStartedAt = this.currentAngle

      // reset the total angle to rotate
      this.totalAngleToRotate = 0.0
    }
  }
}

export default ImagePlane
