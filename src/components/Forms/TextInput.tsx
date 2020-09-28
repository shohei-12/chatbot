import React from "react";
import TextField from "@material-ui/core/TextField";

interface TextInputProps {
  label: string;
  multiline: boolean;
  rows: number;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div>
      <TextField
        fullWidth={true}
        label={props.label}
        margin="dense"
        multiline={props.multiline}
        rows={props.rows}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
