import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { Driver } from 'src/driver/entities/driver.entity';

describe('Driver (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should return a list of drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers')
      .expect(200);

    expect(res.body);
  });

  it('should return a list of drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/active')
      .expect(200);

    expect(res.body);
  });

  it('should return a list of drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/nearby?latitude=25.683684778717996&longitude=-100.31117033078364&distance=3000')
      .expect(200);

    expect(res.body);
  });

  it('should return an empty list of drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/nearby?latitude=25.683684778717996&longitude=-100.31117033078364&distance=1')
      .expect(200);
    expect(res.body).toHaveLength(0);
  });

   it('should return the nearest 3 drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/nearest?latitude=25.683684778717996&longitude=-100.31117033078364&returnedDrivers=3')
      .expect(200);
    expect(res.body).toHaveLength(3);
  });

  it('should return a driver', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/2')
      .expect(200);

    expect(res.body);
  });

  it('should return an empty list of drivers', async () => {
    const res = await request(app.getHttpServer())
      .get('/drivers/500')
      .expect(200);

    expect(res.body).toHaveLength(0);
  });
});

describe('Passenger (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return a list of passengers', async () => {
    const res = await request(app.getHttpServer())
      .get('/passenger')
      .expect(200);

    expect(res.body);
  });
 
  it('should return a passenger', async () => {
    const res = await request(app.getHttpServer())
      .get('/passenger/1')
      .expect(200);

    expect(res.body);
  });

  it('should return an empty list of passengers', async () => {
    const res = await request(app.getHttpServer())
      .get('/passenger/500')
      .expect(200);

    expect(res.body).toHaveLength(0);
  });
});


describe('Travel (e2e)', () => {
  let app: INestApplication<App>;
  let travelID: number = 0;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return a list of travels', async () => {
    const res = await request(app.getHttpServer())
      .get('/travel/active')
      .expect(200);

    expect(res.body);
  });
 
  it('should create a travel', async () => {
    const newTravel = {
      driverID: 8,
      passengerID: 4,
      latitude: 25.684854701636358,
      longitude: -100.31008671839486
    };

    const postRes = await request(app.getHttpServer())
    .post('/travel')
    .send(newTravel)
    .expect(201);
    travelID = postRes.body[0].TravelID;
  expect(travelID).toBeDefined();
  expect(postRes.body[0]).toHaveProperty('TravelID');
  });

  it('should update a travel with pickup data', async () => {
    const travelPickup = {
      travelId: travelID,
      latitude: 25.684854701636358,
      longitude: -100.31008671839486
    };

    const postRes = await request(app.getHttpServer())
    .put('/travel/pickup')
    .send(travelPickup)
    .expect(200);
    
  expect(postRes.body[0]).toHaveProperty('TravelID');
  });

  it('should update a travel with completion data and return an invoice', async () => {
    const travelComplete = {
      travelId: travelID,
      latitude: 25.683713785210234,
      longitude: -100.31123470379684,
      tollFee: 0
    };

    const postRes = await request(app.getHttpServer())
    .put('/travel/complete')
    .send(travelComplete)
    .expect(200);
    
  expect(postRes.body[0]).toHaveProperty('TravelInvoiceID');
  });

});
