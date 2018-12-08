// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  constructor() {
    this.eventObj = {};
  }
  on(eventName, callback) {
    if (!this.eventObj[eventName])
      this.eventObj[eventName] = [callback];
    else {
      this.eventObj[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.eventObj[eventName]) {
      for (let cb of this.eventObj[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.eventObj[eventName] = [];
  }
}

module.exports = Events;
