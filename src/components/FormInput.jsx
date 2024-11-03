const FormInput = ({
  type,
  label,
  placeholder,
  min,
  max,
  handleChange,
  value,
  name,
  pattern,
  title,
}) => {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {type !== "textarea" ? (
        <input
          name={name}
          onChange={handleChange}
          value={value}
          required
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          min={min}
          max={max}
          className="block w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
        />
      ) : (
        <textarea
          name={name}
          onChange={handleChange}
          value={value}
          required
          placeholder="Write your review here"
          className="block w-full p-3 border h-full border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
          rows="4"
        />
      )}
    </label>
  );
};

export default FormInput;
