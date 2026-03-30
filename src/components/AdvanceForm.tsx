import React, { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  gender: string;
  isSubscribed: boolean;
};

type ErrorState = {
  name?: string;
  email?: string;
  password?: string;
};

const AdvancedForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    gender: "",
    isSubscribed: false,
  });

  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const validate = (): ErrorState => {
    const newErrors: ErrorState = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", form);

    // Reset form
    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      isSubscribed: false,
    });

    setErrors({});
  };

  const isFormValid =
    form.name && form.email && form.password && form.gender;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>Advanced Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      {/* Gender */}
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={form.isSubscribed}
          onChange={handleChange}
        />
        Subscribe
      </label>

      {/* Submit */}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default AdvancedForm;