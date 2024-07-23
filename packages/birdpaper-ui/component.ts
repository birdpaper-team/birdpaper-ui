import { BpButton } from "@birdpaper-ui/components/button";
import { BpButtonGroup } from "@birdpaper-ui/components/buttonGroup";
import { BpInput } from "@birdpaper-ui/components/input";
import { BpSpace } from "@birdpaper-ui/components/space";
import { BpTooltip } from "@birdpaper-ui/components/tooltip";
import { BpTable } from "@birdpaper-ui/components/table";
import { BpCheckbox } from "@birdpaper-ui/components/checkbox";

import type { Plugin } from "vue";

export default [BpButton, BpButtonGroup, BpInput, BpSpace, BpTooltip, BpTable, BpCheckbox] as unknown as Plugin[];
