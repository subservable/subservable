export function createProvenance(...) {
    const value = {
        inputRefs,
        procedureId,
        outputRef,
        parentRefs,
    };

    const canonical = canonicalize(value);

    const id = hash(canonical);

    return deepFreeze({
        id,
        ...value,
    });
}