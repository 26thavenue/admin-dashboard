import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./accordion.css";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { HiOutlinePlusCircle } from "react-icons/hi2";

type TCollapse = {
  eventKey: string;
  title: string;
  body: string;
};

interface ContextAwareToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  eventKey: string;
  callback?: (eventKey: string) => void;
}

function ContextAwareToggle({
  children,
  eventKey,
  callback,
  ...props
}: ContextAwareToggleProps) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return (
    <button
      {...props}
      type="button"
      //  style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Collapse({ eventKey, title, body }: TCollapse) {
  return (
    <Card className="border-none bg-transparent py-3">
      <Card.Header className="border-none bg-transparent">
        <ContextAwareToggle
          className="w-full flex items-center justify-between text-[18px] gap-2"
          eventKey={eventKey}
        >
          <h3 className="text-[16px] lg:text-[18px] font-medium text-left w-[300px]">
            {title}
          </h3>
          <HiOutlinePlusCircle size={24} className="text-[18px]" color="red" />
        </ContextAwareToggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body className="">{body}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

function AllCollapseExample() {
  return (
    <Accordion className="mx-auto w-full max-w-2xl relative">
      <Collapse
        title={"What is a SIM-only deal?"}
        eventKey="0"
        body={
          "    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Collapse
        title={"Why choose a SIM-only deal?"}
        eventKey="1"
        body={
          "    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Collapse
        title={"How much data should I look for in a SIM-only deal?"}
        eventKey="2"
        body={
          "    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Collapse
        title={"Can I keep my number on a SIM-only deal?"}
        eventKey="3"
        body={
          "    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </Accordion>
  );
}

export default AllCollapseExample;
