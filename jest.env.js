if (typeof setImmediate !== 'undefined') {
    global.setImmediate = jest.useRealTimers;
  } else {
    global.setImmediate = setTimeout;
  }