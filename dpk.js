const crypto = require("crypto");

exports.deterministicPartitionKey = (event, options = {}) => {
  const {
    partitionKey: defaultPartitionKey = "0",
    maxPartitionKeyLength = 256,
  } = options;

  if (!event) {
    return defaultPartitionKey;
  }

  const candidate = event.partitionKey || generateHash(JSON.stringify(event));
  const processedCandidate = processCandidate(candidate);

  return processedCandidate.length <= maxPartitionKeyLength
    ? processedCandidate
    : generateHash(processedCandidate);
};

function generateHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function processCandidate(candidate) {
  return typeof candidate === "string" ? candidate : JSON.stringify(candidate);
}
