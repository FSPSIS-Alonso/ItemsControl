export class OITM_RED {
  private _ItemCode: string;
  private _ItemName: string;
  private _ForeignName: string | null;
  private _isNew: boolean;

  constructor() {
    this._ItemCode = '';
    this._ItemName = '';
    this._ForeignName = '';
    this._isNew = true;
  }

  setValuesFromInterface(object: Oitm) {
    this._ItemCode = object.ItemCode;
    this._ItemName = object.ItemName;
    this._ForeignName = object.ForeignName;
    this._isNew = false;
  }

  get isNew() {
    return this._isNew;
  }
  get ItemCode() {
    return this._ItemCode;
  }
  get ItemName() {
    return this._ItemName;
  }
  get ForeignName() {
    return this._ForeignName;
  }

  set ItemCode(value: string) {
    this._ItemCode = value;
  }
  set ItemName(value: string) {
    this._ItemName = value;
  }
  set ForeignName(value: string | null) {
    this._ForeignName = value;
  }

  toJSON() {
    return {
      ItemCode: this._ItemCode,
      ItemName: this._ItemName,
      ForeignName: this._ForeignName,
    };
  }
}

export interface Oitm {
  'odata.etag': string;
  ItemCode: string;
  ItemName: string;
  ForeignName: null;
  ItemsGroupCode: number;
  CustomsGroupCode: number;
  SalesVATGroup: string;
  BarCode: string;
  VatLiable: ForceSelectionOfSerialNumber;
  PurchaseItem: ForceSelectionOfSerialNumber;
  SalesItem: ForceSelectionOfSerialNumber;
  InventoryItem: ForceSelectionOfSerialNumber;
  IncomeAccount: null;
  ExemptIncomeAccount: null;
  ExpanseAccount: null;
  Mainsupplier: string;
  SupplierCatalogNo: null;
  DesiredInventory: number;
  MinInventory: number;
  Picture: null;
  User_Text: null;
  SerialNum: null;
  CommissionPercent: number;
  CommissionSum: number;
  CommissionGroup: number;
  TreeType: string;
  AssetItem: AssetItem;
  DataExportCode: null;
  Manufacturer: number;
  QuantityOnStock: number;
  QuantityOrderedFromVendors: number;
  QuantityOrderedByCustomers: number;
  ManageSerialNumbers: AssetItem;
  ManageBatchNumbers: AssetItem;
  Valid: ForceSelectionOfSerialNumber;
  ValidFrom: null;
  ValidTo: null;
  ValidRemarks: null;
  Frozen: AssetItem;
  FrozenFrom: null;
  FrozenTo: null;
  FrozenRemarks: null;
  SalesUnit: string;
  SalesItemsPerUnit: number;
  SalesPackagingUnit: null;
  SalesQtyPerPackUnit: number;
  SalesUnitLength: number;
  SalesLengthUnit: null;
  SalesUnitWidth: number;
  SalesWidthUnit: null;
  SalesUnitHeight: number;
  SalesHeightUnit: null;
  SalesUnitVolume: number;
  SalesVolumeUnit: number;
  SalesUnitWeight: number;
  SalesWeightUnit: null;
  PurchaseUnit: string;
  PurchaseItemsPerUnit: number;
  PurchasePackagingUnit: null;
  PurchaseQtyPerPackUnit: number;
  PurchaseUnitLength: number;
  PurchaseLengthUnit: null;
  PurchaseUnitWidth: number;
  PurchaseWidthUnit: null;
  PurchaseUnitHeight: number;
  PurchaseHeightUnit: null;
  PurchaseUnitVolume: number;
  PurchaseVolumeUnit: number;
  PurchaseUnitWeight: number;
  PurchaseWeightUnit: null;
  PurchaseVATGroup: string;
  SalesFactor1: number;
  SalesFactor2: number;
  SalesFactor3: number;
  SalesFactor4: number;
  PurchaseFactor1: number;
  PurchaseFactor2: number;
  PurchaseFactor3: number;
  PurchaseFactor4: number;
  MovingAveragePrice: number;
  ForeignRevenuesAccount: null;
  ECRevenuesAccount: null;
  ForeignExpensesAccount: null;
  ECExpensesAccount: null;
  AvgStdPrice: number;
  DefaultWarehouse: null;
  ShipType: null;
  GLMethod: string;
  TaxType: string;
  MaxInventory: number;
  ManageStockByWarehouse: ForceSelectionOfSerialNumber;
  PurchaseHeightUnit1: null;
  PurchaseUnitHeight1: number;
  PurchaseLengthUnit1: null;
  PurchaseUnitLength1: number;
  PurchaseWeightUnit1: null;
  PurchaseUnitWeight1: number;
  PurchaseWidthUnit1: null;
  PurchaseUnitWidth1: number;
  SalesHeightUnit1: null;
  SalesUnitHeight1: number;
  SalesLengthUnit1: null;
  SalesUnitLength1: number;
  SalesWeightUnit1: null;
  SalesUnitWeight1: number;
  SalesWidthUnit1: null;
  SalesUnitWidth1: number;
  ForceSelectionOfSerialNumber: ForceSelectionOfSerialNumber;
  ManageSerialNumbersOnReleaseOnly: AssetItem;
  WTLiable: ForceSelectionOfSerialNumber;
  CostAccountingMethod: string;
  SWW: null;
  WarrantyTemplate: null;
  IndirectTax: AssetItem;
  ArTaxCode: null;
  ApTaxCode: null;
  BaseUnitName: null;
  ItemCountryOrg: null;
  IssueMethod: string;
  SRIAndBatchManageMethod: string;
  IsPhantom: AssetItem;
  InventoryUOM: string;
  PlanningSystem: string;
  ProcurementMethod: string;
  ComponentWarehouse: string;
  OrderIntervals: null;
  OrderMultiple: number;
  LeadTime: number;
  MinOrderQuantity: number;
  ItemType: string;
  ItemClass: string;
  OutgoingServiceCode: number;
  IncomingServiceCode: number;
  ServiceGroup: number;
  NCMCode: number;
  MaterialType: string;
  MaterialGroup: number;
  ProductSource: string;
  Properties1: AssetItem;
  Properties2: AssetItem;
  Properties3: AssetItem;
  Properties4: AssetItem;
  Properties5: AssetItem;
  Properties6: AssetItem;
  Properties7: AssetItem;
  Properties8: AssetItem;
  Properties9: AssetItem;
  Properties10: AssetItem;
  Properties11: AssetItem;
  Properties12: AssetItem;
  Properties13: AssetItem;
  Properties14: AssetItem;
  Properties15: AssetItem;
  Properties16: AssetItem;
  Properties17: AssetItem;
  Properties18: AssetItem;
  Properties19: AssetItem;
  Properties20: AssetItem;
  Properties21: AssetItem;
  Properties22: AssetItem;
  Properties23: AssetItem;
  Properties24: AssetItem;
  Properties25: AssetItem;
  Properties26: AssetItem;
  Properties27: AssetItem;
  Properties28: AssetItem;
  Properties29: AssetItem;
  Properties30: AssetItem;
  Properties31: AssetItem;
  Properties32: AssetItem;
  Properties33: AssetItem;
  Properties34: AssetItem;
  Properties35: AssetItem;
  Properties36: AssetItem;
  Properties37: AssetItem;
  Properties38: AssetItem;
  Properties39: AssetItem;
  Properties40: AssetItem;
  Properties41: AssetItem;
  Properties42: AssetItem;
  Properties43: AssetItem;
  Properties44: AssetItem;
  Properties45: AssetItem;
  Properties46: AssetItem;
  Properties47: AssetItem;
  Properties48: AssetItem;
  Properties49: AssetItem;
  Properties50: AssetItem;
  Properties51: AssetItem;
  Properties52: AssetItem;
  Properties53: AssetItem;
  Properties54: AssetItem;
  Properties55: AssetItem;
  Properties56: AssetItem;
  Properties57: AssetItem;
  Properties58: AssetItem;
  Properties59: AssetItem;
  Properties60: AssetItem;
  Properties61: AssetItem;
  Properties62: AssetItem;
  Properties63: AssetItem;
  Properties64: AssetItem;
  AutoCreateSerialNumbersOnRelease: AssetItem;
  DNFEntry: number;
  GTSItemSpec: null;
  GTSItemTaxCategory: null;
  FuelID: number;
  BeverageTableCode: null;
  BeverageGroupCode: null;
  BeverageCommercialBrandCode: number;
  Series: number;
  ToleranceDays: null;
  TypeOfAdvancedRules: string;
  IssuePrimarilyBy: string;
  NoDiscounts: AssetItem;
  AssetClass: string;
  AssetGroup: string;
  InventoryNumber: string;
  Technician: null;
  Employee: null;
  Location: null;
  AssetStatus: string;
  CapitalizationDate: null;
  StatisticalAsset: AssetItem;
  Cession: AssetItem;
  DeactivateAfterUsefulLife: AssetItem;
  ManageByQuantity: AssetItem;
  UoMGroupEntry: number;
  InventoryUoMEntry: number;
  DefaultSalesUoMEntry: number;
  DefaultPurchasingUoMEntry: number;
  DepreciationGroup: null;
  AssetSerialNumber: string;
  InventoryWeight: number;
  InventoryWeightUnit: number;
  InventoryWeight1: number;
  InventoryWeightUnit1: null;
  DefaultCountingUnit: null;
  CountingItemsPerUnit: number;
  DefaultCountingUoMEntry: null;
  Excisable: AssetItem;
  ChapterID: number;
  ScsCode: null;
  SpProdType: null;
  ProdStdCost: number;
  InCostRollup: ForceSelectionOfSerialNumber;
  VirtualAssetItem: AssetItem;
  EnforceAssetSerialNumbers: AssetItem;
  AttachmentEntry: null;
  LinkedResource: null;
  UpdateDate: Date;
  UpdateTime: string;
  GSTRelevnt: AssetItem;
  SACEntry: number;
  GSTTaxCategory: string;
  ServiceCategoryEntry: number;
  CapitalGoodsOnHoldPercent: number;
  CapitalGoodsOnHoldLimit: number;
  AssessableValue: number;
  AssVal4WTR: number;
  SOIExcisable: string;
  TNVED: null;
  ImportedItem: AssetItem;
  PricingUnit: number;
  CreateDate: Date;
  CreateTime: string;
  NVECode: null;
  CtrSealQty: number;
  CESTCode: number;
  LegalText: null;
  DataVersion: number;
  CreateQRCodeFrom: null;
  TraceableItem: AssetItem;
  CommodityClassification: null;
  U_FS_ArticuloTablet: string;
  U_FSPSIS_IMG: null;
  U_FSPSIS_NAT: string;
  U_FSPSIS_IMG1: null;
  U_FSPSIS_IMG2: null;
  U_FSPSIS_VIDEO: null;
  U_FSPSIS_DIAS_CADUCIDAD: null;
  U_UNID_ESPECIAL: null;
  U_FSPSIS_OBSERVACIONES: null;
  U_FSPSIS_NOMBRE_ETIQ: null;
  U_FSPSIS_NOMB_PALET: null;
  U_FSPSIS_UND_PALET: number;
  U_FSPSIS_LOTEDATE: string;
  U_FSPSIS_CAJASPALET: string;
  U_FSPSIS_PESOBRUTO: null;
  U_FSPSIS_MOSAICO: null;
  U_FSPSIS_FORZAR_ENTRADA: string;
  U_FSPSIS_CODIGOALT: null;
  ItemPrices: ItemPrice[];
  ItemWarehouseInfoCollection: ItemWarehouseInfoCollection[];
  ItemPreferredVendors: ItemPreferredVendor[];
  ItemLocalizationInfos: any[];
  ItemProjects: any[];
  ItemDistributionRules: any[];
  ItemAttributeGroups: any[];
  ItemDepreciationParameters: any[];
  ItemPeriodControls: any[];
  ItemUnitOfMeasurementCollection: ItemUnitOfMeasurementCollection[];
  ItemBarCodeCollection: ItemBarCodeCollection[];
  ItemIntrastatExtension: ItemIntrastatExtension;
}

export enum AssetItem {
  TNO = 'tNO',
}

export enum ForceSelectionOfSerialNumber {
  TYES = 'tYES',
}

export interface ItemBarCodeCollection {
  AbsEntry: number;
  UoMEntry: number;
  Barcode: string;
  FreeText: string;
}

export interface ItemIntrastatExtension {
  ItemCode: string;
  CommodityCode: null;
  SupplementaryUnit: null;
  FactorOfSupplementaryUnit: number;
  ImportRegionState: null;
  ExportRegionState: null;
  ImportNatureOfTransaction: null;
  ExportNatureOfTransaction: null;
  ImportStatisticalProcedure: null;
  ExportStatisticalProcedure: null;
  CountryOfOrigin: null;
  ServiceCode: null;
  Type: string;
  ServiceSupplyMethod: string;
  ServicePaymentMethod: string;
  ImportRegionCountry: string;
  ExportRegionCountry: string;
  UseWeightInCalculation: ForceSelectionOfSerialNumber;
  IntrastatRelevant: AssetItem;
  StatisticalCode: null;
}

export interface ItemPreferredVendor {
  BPCode: string;
}

export interface ItemPrice {
  PriceList: number;
  Price: number | null;
  Currency: null | string;
  AdditionalPrice1: number | null;
  AdditionalCurrency1: null;
  AdditionalPrice2: number | null;
  AdditionalCurrency2: null;
  BasePriceList: number;
  Factor: number;
  UoMPrices: any[];
}

export interface ItemUnitOfMeasurementCollection {
  UoMType: UoMType;
  UoMEntry: number;
  DefaultBarcode: number | null;
  DefaultPackage: null;
  Length1: number;
  Length1Unit: null;
  Length2: number;
  Length2Unit: null;
  Width1: number;
  Width1Unit: null;
  Width2: number;
  Width2Unit: null;
  Height1: number;
  Height1Unit: null;
  Height2: number;
  Height2Unit: null;
  Volume: number;
  VolumeUnit: number | null;
  Weight1: number;
  Weight1Unit: null;
  Weight2: number;
  Weight2Unit: null;
  ItemUoMPackageCollection: any[];
}

export enum UoMType {
  IutInventory = 'iutInventory',
  IutPurchasing = 'iutPurchasing',
  IutSales = 'iutSales',
}

export interface ItemWarehouseInfoCollection {
  MinimalStock: number;
  MaximalStock: number;
  MinimalOrder: number;
  StandardAveragePrice: number;
  Locked: AssetItem;
  InventoryAccount: null;
  CostAccount: null;
  TransferAccount: null;
  RevenuesAccount: null;
  VarienceAccount: null;
  DecreasingAccount: null;
  IncreasingAccount: null;
  ReturningAccount: null;
  ExpensesAccount: null;
  EURevenuesAccount: null;
  EUExpensesAccount: null;
  ForeignRevenueAcc: null;
  ForeignExpensAcc: null;
  ExemptIncomeAcc: null;
  PriceDifferenceAcc: null;
  WarehouseCode: string;
  InStock: number;
  Committed: number;
  Ordered: number;
  CountedQuantity: number;
  WasCounted: AssetItem;
  UserSignature: number;
  Counted: number;
  ExpenseClearingAct: null;
  PurchaseCreditAcc: null;
  EUPurchaseCreditAcc: null;
  ForeignPurchaseCreditAcc: null;
  SalesCreditAcc: null;
  SalesCreditEUAcc: null;
  ExemptedCredits: null;
  SalesCreditForeignAcc: null;
  ExpenseOffsettingAccount: null;
  WipAccount: null;
  ExchangeRateDifferencesAcct: null;
  GoodsClearingAcct: null;
  NegativeInventoryAdjustmentAccount: null;
  CostInflationOffsetAccount: null;
  GLDecreaseAcct: null;
  GLIncreaseAcct: null;
  PAReturnAcct: null;
  PurchaseAcct: null;
  PurchaseOffsetAcct: null;
  ShippedGoodsAccount: null;
  StockInflationOffsetAccount: null;
  StockInflationAdjustAccount: null;
  VATInRevenueAccount: null;
  WipVarianceAccount: null;
  CostInflationAccount: null;
  WHIncomingCenvatAccount: null;
  WHOutgoingCenvatAccount: null;
  StockInTransitAccount: null;
  WipOffsetProfitAndLossAccount: null;
  InventoryOffsetProfitAndLossAccount: null;
  DefaultBin: null;
  DefaultBinEnforced: AssetItem;
  PurchaseBalanceAccount: null;
  ItemCode: string;
  IndEscala: ForceSelectionOfSerialNumber;
  CNJPMan: null;
  ItemCycleCounts: any[];
}
