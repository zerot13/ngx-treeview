import { Injectable } from '@angular/core';

@Injectable()
export class TreeviewConfig {
  hasAllCheckBox = true;
  hasCheckBoxes = false;
  hasFilter = false;
  hasCollapseExpand = false;
  decoupleChildFromParent = false;
  compact = true
  maxHeight = 500;

  get hasDivider(): boolean {
    return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
  }

  public static create(fields?: {
    hasAllCheckBox?: boolean,
    hasCheckBoxes?: boolean,
    hasFilter?: boolean,
    hasCollapseExpand?: boolean,
    decoupleChildFromParent?: boolean
    compact?: boolean,
    maxHeight?: number,
  }): TreeviewConfig {
    const config = new TreeviewConfig();
    Object.assign(config, fields);
    return config;
  }
}
