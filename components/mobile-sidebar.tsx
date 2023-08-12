import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="pr-4 md:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 pt-10 w-30 bg-secondary">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;