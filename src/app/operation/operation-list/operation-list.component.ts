import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Operation } from 'src/app/shared/interfaces/operation';
import { OperationService } from '../operation.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ErrorModalComponent } from '../../shared/error-modal/error-modal.component';

/**
 * Component for displaying a list of mathematical operations.
 */
@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  /**
   * Signal representing the count of operations.
   */
  public operationsCount = signal(0);

  /**
   * Data source for the table of operations.
   */
  public dataSource = new MatTableDataSource<Operation>([]);

  /**
   * Paginator for the operations table.
   */
  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  /**
   * Columns to be displayed in the operations table.
   */
  public displayedColumns = ['x', 'y', 'n', 'result'];

  /**
   * Reference to the loading bar service.
   */
  public loader = this.loadingBar.useRef();

  /**
   * Constructs the ChallengeListComponent.
   * @param operationService - Service to retrieve operations.
   * @param dialog - Service to manage Material dialogs.
   * @param loadingBar - Service for displaying a loading bar.
   */
  constructor(
    private operationService: OperationService,
    public dialog: MatDialog,
    private loadingBar: LoadingBarService
  ) { }

  /**
   * OnInit lifecycle hook to retrieve the results.
   */
  ngOnInit(): void {
    this.getResults();
  }

  /**
   * Opens a dialog displaying an error message.
   * @param errorMessage - The error message to display.
   */
  private openErrorDialog(errorMessage: string) {
    this.dialog.open(ErrorModalComponent, {
      data: { message: errorMessage }
    });
  }

  /**
   * Retrieves the list of operations from the server.
   */
  getResults() {
    this.loader.start();
    this.operationService.getOperations().subscribe({
      next: (data) => {
        if (data.status) {
          // Set the operations count and update the table data source
          this.operationsCount.set(data.data.length);
          this.dataSource.data = data.data;
        }
      },
      error: (error) => {
        // Stop the loader and open an error dialog on failure
        this.loader.stop();
        this.openErrorDialog('Se ha producido un error al cargar la información');
      },
      complete: () => {
        // Always stop the loader when the observable completes
        this.loader.stop();
      },
    });
  }
}
