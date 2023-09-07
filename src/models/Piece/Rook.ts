import { Cell } from "../Cell/Cell";
import { LongRangePieceMath } from "../Utils/LongRangePieceMath";

import { Color, Piece, PieceIcons, PieceNames } from "./Piece";

export class Rook extends Piece {
  constructor(color: Color, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.ROOK;
    this.icon = PieceIcons.ROOK;
  }
  public canMove(targetCell: Cell): boolean {
    if (!super.canMove(targetCell)) return false;
    if (LongRangePieceMath.isEmptyHorizontal(targetCell, this.cell.x, this.cell.y)) return true;
    if (LongRangePieceMath.isEmptyVetrical(targetCell, this.cell.x, this.cell.y)) return true;
    return false;
  }
}
