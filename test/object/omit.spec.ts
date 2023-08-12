import { omit } from "../../src";


describe('omit', () => {
    it('should omit specified properties from an object', () => {
        const inputObject: any = { name: 'John', age: 30, gender: 'male' };
        const propertiesToOmit: any = ['age', 'gender'];

        const result = omit(inputObject, propertiesToOmit);

        expect(result).toEqual({ name: 'John' });
    });

    it('should return the same object if no properties to omit', () => {
        const inputObject = { name: 'Alice', age: 25 };
        const propertiesToOmit: string[] = [];

        const result = omit(inputObject, propertiesToOmit);

        expect(result).toBe(inputObject);
    });

    it('should handle properties that do not exist', () => {
        const inputObject = { name: 'Bob', age: 40 };
        const propertiesToOmit = ['address', 'phone'];

        const result = omit(inputObject, propertiesToOmit);

        expect(result).toBe(inputObject);
    });

    it('should return an empty object if input object is empty', () => {
        const inputObject = {};
        const propertiesToOmit = ['name', 'age'];

        const result = omit(inputObject, propertiesToOmit);

        expect(result).toEqual({});
    });
});