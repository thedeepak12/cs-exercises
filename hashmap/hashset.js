export class HashSet {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.size = 0;
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  add(key) {
    if (typeof key !== "string") {
      throw new Error("Key must be a string");
    }

    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry === key) {
        return;
      }
    }

    bucket.push(key);
    this.size++;

    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }
  }

  has(key) {
    if (typeof key !== "string") return false;
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    if (typeof key !== "string") return false;
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const result = [];
    for (let bucket of this.buckets) {
      for (let entry of bucket) {
        result.push(entry);
      }
    }
    return result;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);

    for (let bucket of oldBuckets) {
      for (let key of bucket) {
        this.add(key);
      }
    }
  }
}