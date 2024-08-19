import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SongServiceBase } from "./base/song.service.base";

@Injectable()
export class SongService extends SongServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
