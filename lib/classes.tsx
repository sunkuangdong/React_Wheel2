function scopedClassMaker(prefix: string) {
  return function x(name?: string) {
    return ["sun-dialog", name].filter(Boolean).join("-")
  }
};

export {scopedClassMaker};