import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import useEmailValidator from "../Utilities/email.validator";

interface IProps {
  onSubmit: (e: string | null) => void;
}

export default function EmailAuthForm({ onSubmit }: IProps) {
  const { email, error, validateEmail } = useEmailValidator();
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input
        id="my-input"
        onChange={validateEmail}
        aria-describedby="my-helper-text"
      />
      <Button
        onClick={() => onSubmit(email)}
        type="submit"
        disabled={error ? true : false}
      >
        Send Login Link
      </Button>
      {error ? (
        <FormHelperText id="my-helper-text">{error}</FormHelperText>
      ) : (
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      )}
    </FormControl>
  );
}
