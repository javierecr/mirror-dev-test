export class Pagination {
  currentPage: number = 1;
  nextPage: any = null;
  prevPage: any = null;
  totalCount: number = 0;
  totalPages: number =  1;

  private _ELEMENTES_PER_PAGE: number = 15;

  get pageInitElementNumber(): number {
    const virtualInitElementNumber = this._ELEMENTES_PER_PAGE + 1;

    return this.currentPage === 1 ? 1 : virtualInitElementNumber;
  }

  get pageEndElementNumber(): number {
    const virtualEndElementNumber = this.currentPage * this._ELEMENTES_PER_PAGE;

    return virtualEndElementNumber > this.totalCount ? this.totalCount : virtualEndElementNumber;
  }

  constructor(pagination: any) {
    this.currentPage = pagination.current_page || 1;
    this.nextPage = pagination.next_page || null;
    this.prevPage = pagination.prev_page || null;
    this.totalCount = pagination.total_count || 0;
    this.totalPages = pagination.total_pages || 1;
  }
}