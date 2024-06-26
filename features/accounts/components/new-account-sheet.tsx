import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";
import AccountForm from "./account-form";

const NewAccountSheet = () => {
    const {isOpen, onClose} = useNewAccount()
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transaction
          </SheetDescription>
        </SheetHeader>
        <AccountForm disabled={false} onSubmit={() => {}}/>
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
