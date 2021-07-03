class InputType {
  label: string;
  pattern: Pattern;

  constructor(label: string, pattern: Pattern) {
    this.label = label;
    this.pattern = pattern;
  }
}

type Pattern = "text" | "date" | "time"