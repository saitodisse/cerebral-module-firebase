import {
  listenTo,
  createRef
} from './helpers';

export default function createOnChildChanged(controller) {
  return (path, signal, options = {}) => {
    listenTo(
      createRef(path, options),
      path,
      'child_changed',
      signal,
      (data) => {
        controller.getSignals(signal)({
          key: data.key,
          value: data.val(),
          ...options.payload
        });
      }
    );
  };
}
