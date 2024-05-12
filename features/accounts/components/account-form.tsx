import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { insertAccountSchema } from "@/db/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
const formSchema = insertAccountSchema.pick({
  name: true,
});

type formValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues: formValues;
  onSubmit: (values: formValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

const AccountForm = ({
  defaultValues,
  onSubmit,
  id,
  disabled,
  onDelete,
}: Props) => {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: formValues) => {
    console.log(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <Form {...form}>
      <form
        className="space-y-4 pt-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Cash, Credit Card, Bank"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? "Save changes" : "Create new Account"}
        </Button>
        {!!id && (
          <Button
            variant={"ghost"}
            type="button"
            onCanPlay={handleDelete}
            className="w-full"
          >
            <Trash className="size-4 mr-2" />
            Delete account
          </Button>
        )}
      </form>
    </Form>
  );
};

export default AccountForm;
