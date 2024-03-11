import { Form } from "react-bootstrap";

type ICustomCheckbox = {
  label: string;
  onChange: (data: string) => void;
};

function CustomCheckbox({ label, onChange }: ICustomCheckbox) {
  return (
    <Form>
      <div key={"checkbox"} className="mb-3">
        <Form.Check type={"checkbox"} id={`check-api-checkbox}`}>
          <Form.Check.Input
            className="bg-[#ff3793] border-[#ff3793] w-[1000px]"
            type={"checkbox"}
            isValid
            value={"selected"}
            onChange={(e) => {
              console.log("value", e.target.value);
              onChange(e.target.value)}}
          />
          <Form.Check.Label className="text-base">{label}</Form.Check.Label>
        </Form.Check>
      </div>
    </Form>
  );
}

export default CustomCheckbox;
