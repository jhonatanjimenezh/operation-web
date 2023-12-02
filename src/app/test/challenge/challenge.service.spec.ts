import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_OPERATION, MOCK_OPERATIONS_OK, MOCK_OPERATION_CREATED, MOCK_OPERATION_ERROR } from '../../shared/constants/mocks';
import { OperationService } from '../../operation/operation.service';
import { defer } from 'rxjs';

let httpClientSpy: {
  get: jasmine.Spy,
  post: jasmine.Spy
};

/**
 * Test suite for OperationService.
 */
describe('OperationService', () => {
  let service: OperationService;
  let httpTestingController: HttpTestingController;

  /**
   * Set up TestBed configuration for each test.
   */
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperationService]
    });
    service = TestBed.inject(OperationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  /**
   * Test to ensure getOperations returns expected operations.
   */
  it('getOperations should return expected operations', fakeAsync(() => {

    httpClientSpy.get.and.returnValue(defer(() => Promise.resolve({ MOCK_OPERATIONS_OK })));
    service.getOperations().subscribe((result) => {
      expect(result).not.toBeNull();
      expect(result).toEqual(MOCK_OPERATIONS_OK);
    });
  }));

  /**
   * Test to check if addOperation posts an operation and returns the expected response.
   */
  it('addOperation should post the operation and return the response', fakeAsync(() => {

    httpClientSpy.post.and.returnValue(defer(() => Promise.resolve({ MOCK_OPERATION_CREATED })));
    service.addOperation(MOCK_OPERATION[0]).subscribe((result) => {
      expect(result).not.toBeNull();
      expect(result).toEqual(MOCK_OPERATION_CREATED);
    });
  }));

});
