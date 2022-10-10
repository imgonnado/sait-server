import { Injectable } from '@nestjs/common';
import { AlertRepository } from './alert.repository';

@Injectable()
export class AlertService {
  constructor(private alertRepository: AlertRepository) {}
}
