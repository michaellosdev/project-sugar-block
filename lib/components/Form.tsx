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

const formVariants = cva("flex flex-col  w-full h-full ", {
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

    const onSubmit: SubmitHandler<FormValues> = async (data) => {};

    return (
      <Card
        className="lg:w-[70%] w-[100%] h-fit rounded-none bg-white"
        elevation={3}
      >
        <CardHeader className="mb-4">
          <CardTitle className="font-headings !font-bold text-h4 lg:text-h3 ">
            Send us a message
          </CardTitle>
        </CardHeader>
        <CardBody className="h-[28rem]  w-full">
          <form
            ref={ref}
            {...props}
            className={psb(formVariants({ className }))}
            // onSubmit={handleSubmit(onSubmit)}
            data-netlify="true"
            name="contact"
            netlify-honeypot="bot-field"
            method="POST"
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you{"'"}re human:{" "}
                <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="h-[20%]   ">
              <label className="sr-only">Name</label>
              <input
                type="text"
                className={`px-4 py-2 h-[65%]     text-body border-2 ${
                  errors.fullName
                    ? "border-danger"
                    : "border-accent focus:border-accent75"
                }  w-full`}
                id="fullName"
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName ? (
                <span className="text-danger text-body-small">
                  {errors.fullName.message}
                </span>
              ) : null}
            </div>
            <div className="h-[20%]">
              <label className="sr-only">Email</label>
              <input
                type="text"
                className={`px-4 py-2 h-[65%]     text-body border-2 ${
                  errors.email
                    ? "border-danger"
                    : "border-accent focus:border-accent75"
                }  w-full`}
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email ? (
                <span className="text-danger text-body-small">
                  {errors.email.message}
                </span>
              ) : null}
            </div>
            <div className="h-[20%]">
              <label className="sr-only">Phone</label>
              <input
                type="number"
                className={`px-4 py-2 h-[65%]     text-body border-2 ${
                  errors.tel
                    ? "border-danger"
                    : "border-accent focus:border-accent75"
                }  w-full`}
                id="tel"
                placeholder="Phone Number"
                {...register("tel")}
              />
              {errors.tel ? (
                <span className="text-danger text-body-small">
                  {errors.tel.message}
                </span>
              ) : null}
            </div>
            <div className="h-[40%]">
              <label className="sr-only">Message</label>
              <textarea
                placeholder="Message"
                className={`px-4 py-2 h-[80%]     text-body border-2 ${
                  errors.message
                    ? "border-danger"
                    : "border-accent focus:border-accent75"
                }  w-full`}
                id="message"
                {...register("message")}
              />
              {errors.message ? (
                <span className="text-danger text-body-small">
                  {errors.message.message}
                </span>
              ) : null}
            </div>
            <div className="w-full flex justify-end ">
              <Button
                variant="filled-accent"
                size="lg"
                className="mr-4 mb-4 -sm:!w-[50%] flex items-center justify-center bg-accent-gradient !text-dark-gray"
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
