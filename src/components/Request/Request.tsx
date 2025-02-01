import { useSendUserMessageMutation } from "@/services/api/dataApi";
import { ObjectWrapper } from "@/styles";
import {
  RequestField,
  RequestFields,
  RequestSend,
  RequestTextArea,
} from "@/styles/Request";
import { RequestForm, RequestFormErrors } from "@/types";
import { useState } from "react";

const Request: React.FC = () => {
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const maxmessagelength = 512;
  const [form, setForm] = useState<RequestForm>({
    username: "",
    useremail: "",
    usermessage: "",
  });

  const [errors, setErrors] = useState<RequestFormErrors>({
    username: false,
    useremail: false,
    usermessage: false,
  });

  const [sendRequest] = useSendUserMessageMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (errors[name as keyof RequestFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }

    if (name === "usermessage" && value.length > 512) {
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    return email.match(isValidEmail) ? true : false;
  };

  const handleSend = () => {
    const newErrors: RequestFormErrors = {
      username: form.username.trim() === "",
      useremail: form.useremail.trim() === "" || !validateEmail(form.useremail),
      usermessage: form.usermessage.trim() === "",
    };

    if (Object.values(newErrors).some((isError) => isError)) {
      setErrors(newErrors);
      return;
    }

    sendRequest(form).unwrap();
    console.log("Отправляем данные формы:", form);
  };

  return (
    <ObjectWrapper>
      <RequestFields>
        <RequestField
          placeholder="Your name"
          variant="standard"
          name="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
          helperText={errors.username ? "Enter your name" : ""}
        />
        <RequestField
          placeholder="Your email"
          variant="standard"
          name="useremail"
          value={form.useremail}
          onChange={handleChange}
          error={errors.useremail}
          helperText={errors.useremail ? "Enter your correct email" : ""}
        />
        <RequestTextArea
          placeholder="Your message"
          multiline
          variant="standard"
          name="usermessage"
          value={form.usermessage}
          onChange={handleChange}
          error={errors.usermessage}
          helperText={
            errors.usermessage
              ? "Enter message"
              : `${form.usermessage.length}/512 symbols`
          }
          slotProps={{ htmlInput: { maxmessagelength } }}
        />
        <RequestSend variant="outlined" onClick={handleSend}>
          Send
        </RequestSend>
      </RequestFields>
    </ObjectWrapper>
  );
};

export default Request;
