import className from "classnames";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  rounded,
  outlined,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      "py-1.5 px-3 text-white border flex items-center",
      {
        "bg-blue-500 border-blue-500": primary,
        "bg-gray-500 border-gray-500": secondary,
        "border-green-500 bg-green-500 border-solid": success,
        "border-yellow-500 bg-yellow-500": warning,
        "border-red-500 bg-red-500": danger,
        "border-purple-500 bg-purple-500": info,
        "rounded-full": rounded,
        "bg-white": outlined,
        "text-blue-500": outlined && primary,
        "text-gray-500": outlined && secondary,
        "text-green-500": outlined && success,
        "text-yellow-500": outlined && warning,
        "text-red-500": outlined && danger,
        "text-purple-500": outlined && info,
      }
    )
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariantValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    info,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!info);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger, info can be true"
      );
    }
  },
};
