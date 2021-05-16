import React, { FC } from "react";
import Spinner from "../../assets/icons/spinner";

const SendForm: FC<SendFormProps> = ({
  loading,
  setUserName,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      name="search-user-form"
      className="search-form"
    >
      <label htmlFor="github-username">Github Username</label>
      <input
        type="text"
        id="github-username"
        name="github-username"
        onBlur={(e) => setUserName(e.currentTarget.value)}
        required
      />
      <button type="submit" name="send-name" data-testid="send-name">
        {loading ? <Spinner /> : "Enviar"}
      </button>
    </form>
  );
};

export default SendForm;
