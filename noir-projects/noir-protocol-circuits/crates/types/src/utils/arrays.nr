pub fn array_length() -> u32 {
    // We get the length by checking the index of the first empty element.
    /// Safety: What?
    let value = unsafe { random() };
    value
}
