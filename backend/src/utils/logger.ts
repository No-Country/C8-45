import { createLogger, format, transports } from "winston";

export class Logger {
  private static loggerFileInstance = createLogger({
    format: format.combine(
      format.timestamp(),
      format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`;
      })
    ),
    transports: [
      new transports.Console(),
      new transports.File({ dirname: "./log", filename: ".log" }),
    ],
  });
  static info(message: string) {
    Logger.loggerFileInstance.log({ level: "info", message });
  }
  static error(message: string) {
    Logger.loggerFileInstance.log({ level: "error", message });
  }
  static warning(message: string) {
    Logger.loggerFileInstance.log({ level: "warning", message });
  }
  static verbose(message: string) {
    Logger.loggerFileInstance.log({ level: "verbose", message });
  }
}
