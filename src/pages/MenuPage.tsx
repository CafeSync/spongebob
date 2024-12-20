"use client";

import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import Sidebar from "./../components/sidebar.tsx";
import { items } from "./../components/sidebar-items.tsx";

const MenuPage = () => {
  return (
    <div className="h-full min-h-[48rem]">
      <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
        <Spacer y={8} />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-2">
            <Avatar
              isBordered
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
            <div className="flex flex-col">
              <p className="text-small font-medium text-default-600">
                John Doe
              </p>
              <p className="text-tiny text-default-400">Product Designer</p>
            </div>
          </div>
          <Input
            fullWidth
            aria-label="search"
            className="px-1"
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <Icon
                className="text-default-500 [&>g]:stroke-[2px]"
                icon="solar:magnifer-linear"
                width={18}
              />
            }
          />
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar defaultSelectedKey="home" items={items} />
          <Card className="mx-2 overflow-visible" shadow="sm">
            <CardBody className="items-center py-5 text-center">
              <h3 className="text-medium font-medium text-default-700">
                Upgrade to Pro
                <span aria-label="rocket-emoji" className="ml-2" role="img">
                  🚀
                </span>
              </h3>
              <p className="p-4 text-small text-default-500">
                Get 1 month free and unlock all the features of the pro plan.
              </p>
            </CardBody>
            <CardFooter className="absolute -bottom-8 justify-center">
              <Button
                className="px-10 shadow-md"
                color="primary"
                radius="full"
                variant="shadow"
              >
                Upgrade
              </Button>
            </CardFooter>
          </Card>
        </ScrollShadow>

        <Spacer y={8} />

        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon
                className="text-default-500"
                icon="solar:info-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Help & Information
          </Button>
          <Button
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon
                className="rotate-180 text-default-500"
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
