
function getBasicToast(type, message) {
  return {
    type,
    message,
    options: {
      showCloseButton: true
    }
  };
}

export { getBasicToast };
