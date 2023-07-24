import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { psb } from "../utils/psb";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";

//for validation
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Must be 3 or more characters" })
    .max(50)
    .nonempty(),
  email: z.string().email({ message: "Invalid email" }),
  tel: z
    .string()
    .min(10, { message: "Must be valid phone number" })
    .max(12)
    .nonempty(),
  message: z
    .string()
    .min(10, { message: "Tell us more about your request" })
    .max(500)
    .nonempty(),
});

type FormValues = z.infer<typeof schema>;

const formVariants = cva("flex flex-col w-full h-fit ", {
  variants: {},
  defaultVariants: {},
});

export interface FormProps
  extends React.HTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, ...props }, ref) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            tel: data.tel,
            messageBody: data.message,
          }), // <-- this is the important part
        });

        if (response.ok) {
          alert("Thank you for your message! We will get back to you shortly.");
          console.log("Full name: ", data.fullName);
          console.log("Email: ", data.email);
          console.log("Phone number: ", data.tel);
          console.log("Message: ", data.message);
          console.log(response);
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Card className="lg:w-[36rem] w-[100%] h-fit" elevation={2}>
        <CardHeader className="mb-4">
          <CardTitle>Get Started</CardTitle>
        </CardHeader>
        <CardBody className="h-fit">
          <form
            ref={ref}
            {...props}
            className={psb(formVariants({ className }))}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="h-24">
              <label htmlFor="full name"></label>
              <input
                type="text"
                className={`px-4 py-2 h-16  rounded-[12px]   text-body border-2 ${
                  errors.fullName
                    ? "border-danger"
                    : "border-primary50 focus:border-primary75"
                }  w-full`}
                id="fullName"
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName ? (
                <span className="text-danger text-body">
                  {errors.fullName.message}
                </span>
              ) : null}
            </div>
            <div className="h-24">
              <label htmlFor="email"></label>
              <input
                type="text"
                className={`px-4 py-2 h-16  rounded-[12px]   text-body border-2 ${
                  errors.email
                    ? "border-danger"
                    : "border-primary50 focus:border-primary75"
                }  w-full`}
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email ? (
                <span className="text-danger text-body">
                  {errors.email.message}
                </span>
              ) : null}
            </div>
            <div className="h-24">
              <label htmlFor="tel"></label>
              <input
                type="number"
                className={`px-4 py-2 h-16  rounded-[12px]   text-body border-2 ${
                  errors.tel
                    ? "border-danger"
                    : "border-primary50 focus:border-primary75"
                }  w-full`}
                id="tel"
                placeholder="Phone Number"
                {...register("tel")}
              />
              {errors.tel ? (
                <span className="text-danger text-body">
                  {errors.tel.message}
                </span>
              ) : null}
            </div>
            <div className="h-56">
              <label htmlFor="full name"></label>
              <textarea
                placeholder="Message"
                className={`px-4 py-2 h-48  rounded-[12px]   text-body border-2 ${
                  errors.message
                    ? "border-danger"
                    : "border-primary50 focus:border-primary75"
                }  w-full`}
                id="message"
                {...register("message")}
              />
              {errors.message ? (
                <span className="text-danger text-body">
                  {errors.message.message}
                </span>
              ) : null}
            </div>
            <div className="w-full flex justify-end">
              <Button
                variant="filled"
                size="lg"
                className=""
                elevation={4}
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    );
  }
);

Form.displayName = "Form";

export default Form;
