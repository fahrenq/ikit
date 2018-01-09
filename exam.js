class InterfaceObject {
  constructor(length, height, name) {
    this.length = length;
    this.height = height;
    this.name = name;
  }

  set objects(val) {
    // this._objects named with underscore to indicate
    // it's private and avoid conflicts with setter w/o underscore
    this._objects = val;
  }

  // Instead of defining showInfo as class method, we'd
  // better to place define it as 'getter' for this._objects,
  // however, exam tasks says we should have it implemented a method
  showInfo() {
    // Didn't serialize objects somehow, since default object
    // output looks like ClassName { prop1: val, prop2: val, ... }
    return this._objects;
  }
}

class Button extends InterfaceObject {
  constructor(length, height, name, caption) {
    super(length, height, name);
    this.caption = caption;
  }
}

class LineEdit extends InterfaceObject {
  constructor(length, height, name, text) {
    super(length, height, name);
    this.text = text;
  }
}

const btn = new Button(10, 20, 'ChildButtonName', 'ButtonCaption');
const le = new LineEdit(10, 20, 'ChildLineEditName', 'LineEditText');

const io = new InterfaceObject(0, 0, 'ParentIOName');
io.objects = [btn, le]

console.log(io.showInfo());
