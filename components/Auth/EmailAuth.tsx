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
      <InputLabel htmlFor="my-input">Enter email for magical login link</InputLabel>
      <Input
        id="my-input"
        onChange={validateEmail}
        aria-describedby="my-helper-text"
      />
      <Button
        style={{margin: '1rem 0'}}
        onClick={() => onSubmit(email)}
        variant="contained"
        disabled={error ? true : false}
      >
        Get the magic login link
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
