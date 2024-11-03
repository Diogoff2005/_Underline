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
    <label className="block mb-2 text-sm font-medium text-gray-700">
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
          className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      ) : (
        <textarea
          name={name}
          onChange={handleChange}
          value={value}
          required
          placeholder="Write your review here"
          className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
        />
      )}
    </label>
  );
};

export default FormInput;
