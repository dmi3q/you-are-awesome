// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => { };
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        set: (newValue) => { value = newValue; },
        get: () => { return value; }
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    let magic = () => { };
    magic.prototype = magic.__proto__;
    return magic;
};
const incrementor = () => { };
const asyncIncrementor = () => { };
const createIncrementer = () => { };

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(arg); }, 1111);
    })
};
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => { };
const toBuffer = () => { };
const sortByProto = (protoArr) => protoArr.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
