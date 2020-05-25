/**
 * Processes Error
 * @param {string} errorCode
 * @returns {{title: String, message: String|null}}
 */
function processError(errorCode) {
  switch (errorCode) {
    case "NO_STOCK":
      return { title: "Error page", message: "No stock has been found" };

    case "INCORRECT_DETAILS":
      return { title: "Error page", message: "Incorrect details have been entered" };

    default:
      return { title: "Error page", message: null };
  }
}

/**
 * Processes Success
 * @returns {{title: String, message: null}}
 */
function processSuccess() {
  return { title: "Order complete", message: null };
}

/**
 * Processes Data
 * @param {array} data
 * @param {number} index
 * @returns {Promise|null}
 */
async function processData(data, index = 0) {
  if (!data[index]) return null;
  const currentState = data[index].state;

  switch (currentState) {
    case "processing": {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("processing complete");
        }, 2000);
      });

      return processData(data, index + 1);
    }

    case "error": {
      const currentErrorCode = data[index].errorCode;

      return processError(currentErrorCode);
    }

    case "success": {
      return processSuccess();
    }

    default: {
      return null;
    }
  }
}

/**
 * Gets the processing page
 * @param {array} data
 * @returns {Promise}
 */
function getProcessingPage(data) {
  return processData(data);
}
