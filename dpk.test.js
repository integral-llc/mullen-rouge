const { deterministicPartitionKey } = require("./dpk.js");

test("returns default partition key when no event and options are provided", () => {
  expect(deterministicPartitionKey()).toBe("0");
});

test("returns custom partition key when no event is provided but custom partition key is set in options", () => {
  expect(deterministicPartitionKey(undefined, { partitionKey: "custom" })).toBe("custom");
});

test("returns the provided partition key when it is present in the event object", () => {
  const event = { partitionKey: "123" };
  expect(deterministicPartitionKey(event)).toBe("123");
});

test("returns a hash of the event object when no partition key is provided", () => {
  const event = { data: "example" };
  const hash = "1eeac9a5fc3f4c6ec1e089cf4bf4f95144a972940be799c1e4f3c911b10ce4eef2fc5d8314b5289a83828483da07304eaf5d3d49dec7ec4f8aa21c5f5c2d637d";
  expect(deterministicPartitionKey(event)).toBe(hash);
});

test("returns a hash of the partition key when its length exceeds the default maximum", () => {
  const event = { partitionKey: "a".repeat(257) };
  const hash = "5008048b64c14975181175f157be4a780c3d443d2177edf323d57884bc7e3979b9b53bca1325e880df3da0d97c435693441cb5527fbe950f5585678dfbb37785";
  expect(deterministicPartitionKey(event)).toBe(hash);
});

test("returns a hash of the partition key when its length exceeds the custom maximum", () => {
  const event = { partitionKey: "a".repeat(17) };
  const options = { maxPartitionKeyLength: 16 };
  const hash = "8f87983c489c5588062a4b58d2e7d2efc3e28f5e17d562e7ca483843b385360af6ede8c6b982cbe58f5243caa272eb1fa32b5f6192c3f7e6ec5d142a724aebd0";
  expect(deterministicPartitionKey(event, options)).toBe(hash);
});

test("returns the provided partition key when its length is equal to the custom maximum", () => {
  const event = { partitionKey: "a".repeat(16) };
  const options = { maxPartitionKeyLength: 16 };
  expect(deterministicPartitionKey(event, options)).toBe("aaaaaaaaaaaaaaaa");
});
