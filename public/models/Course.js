
class Course {
  constructor(courseID, courseTitle, courseTerm, courseInstructor) {
    this.courseID = courseID;
    this.courseTitle = courseTitle;
    this.courseTerm = courseTerm;
    this.courseInstructor = courseInstructor;
  }

  getcourseID() {
    return this.courseID;
  }

  setcourseID(courseID) {
    this.courseID = courseID;
  }

  getTitle() {
    return this.courseTitle;
  }

  setTitle(courseTitle) {
    this.courseTitle = courseTitle;
  }
  geTerm() {
    return this.courseTerm;
  }

  setTerm(courseTerm) {
    this.courseTerm = courseTerm;
  }
  getInstructor() {
    return this.courseInstructor;
  }

  setInstructor(courseInstructor) {
    this.courseInstructor = courseInstructor;
  }

  getCourseDetails() {
    return {
      courseID: this.courseID,
      courseTitle: this.courseTitle,
      courseTerm: this.courseTerm,
      courseInstructor: this.courseInstructor
    };
  }
}
module.exports = Course;
