
var formatCpuTraceString = [];
var formatStr;
formatCpuTraceString[ 0 ] = function( formatData ) { // BRK NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BRK ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 1 ] = function( formatData ) { // ORA INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 2 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 3 ] = function( formatData ) { // ASO INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 4 ] = function( formatData ) { // SKB ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 5 ] = function( formatData ) { // ORA ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 6 ] = function( formatData ) { // ASL ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 7 ] = function( formatData ) { // ASO ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 8 ] = function( formatData ) { // PHP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " PHP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 9 ] = function( formatData ) { // ORA IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 10 ] = function( formatData ) { // ASL ACCUMULATOR
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASL ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 11 ] = function( formatData ) { // ANC IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ANC ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 12 ] = function( formatData ) { // SKW ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 13 ] = function( formatData ) { // ORA ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 14 ] = function( formatData ) { // ASL ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 15 ] = function( formatData ) { // ASO ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 16 ] = function( formatData ) { // BPL RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BPL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 17 ] = function( formatData ) { // ORA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 18 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 19 ] = function( formatData ) { // ASO INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 20 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 21 ] = function( formatData ) { // ORA ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 22 ] = function( formatData ) { // ASL ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 23 ] = function( formatData ) { // ASO ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 24 ] = function( formatData ) { // CLC NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CLC ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 25 ] = function( formatData ) { // ORA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 26 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 27 ] = function( formatData ) { // ASO ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 28 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 29 ] = function( formatData ) { // ORA ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ORA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 30 ] = function( formatData ) { // ASL ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 31 ] = function( formatData ) { // ASO ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ASO ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 32 ] = function( formatData ) { // JSR IMMEDIATE16
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " JSR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 33 ] = function( formatData ) { // AND INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 34 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 35 ] = function( formatData ) { // RLA INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 36 ] = function( formatData ) { // BIT ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BIT ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 37 ] = function( formatData ) { // AND ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 38 ] = function( formatData ) { // ROL ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 39 ] = function( formatData ) { // RLA ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 40 ] = function( formatData ) { // PLP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " PLP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 41 ] = function( formatData ) { // AND IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 42 ] = function( formatData ) { // ROL ACCUMULATOR
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROL ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 43 ] = function( formatData ) { // ANC IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ANC ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 44 ] = function( formatData ) { // BIT ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BIT ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 45 ] = function( formatData ) { // AND ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 46 ] = function( formatData ) { // ROL ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 47 ] = function( formatData ) { // RLA ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 48 ] = function( formatData ) { // BMI RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BMI ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 49 ] = function( formatData ) { // AND INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 50 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 51 ] = function( formatData ) { // RLA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 52 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 53 ] = function( formatData ) { // AND ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 54 ] = function( formatData ) { // ROL ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 55 ] = function( formatData ) { // RLA ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 56 ] = function( formatData ) { // SEC NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SEC ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 57 ] = function( formatData ) { // AND ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 58 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 59 ] = function( formatData ) { // RLA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 60 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 61 ] = function( formatData ) { // AND ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AND ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 62 ] = function( formatData ) { // ROL ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROL ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 63 ] = function( formatData ) { // RLA ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RLA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 64 ] = function( formatData ) { // RTI NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RTI ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 65 ] = function( formatData ) { // EOR INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 66 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 67 ] = function( formatData ) { // LSE INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 68 ] = function( formatData ) { // SKB ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 69 ] = function( formatData ) { // EOR ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 70 ] = function( formatData ) { // LSR ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 71 ] = function( formatData ) { // LSE ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 72 ] = function( formatData ) { // PHA NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " PHA ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 73 ] = function( formatData ) { // EOR IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 74 ] = function( formatData ) { // LSR ACCUMULATOR
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSR ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 75 ] = function( formatData ) { // ALR IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ALR ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 76 ] = function( formatData ) { // JMP IMMEDIATE16
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " JMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 77 ] = function( formatData ) { // EOR ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 78 ] = function( formatData ) { // LSR ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 79 ] = function( formatData ) { // LSE ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 80 ] = function( formatData ) { // BVC RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BVC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 81 ] = function( formatData ) { // EOR INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 82 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 83 ] = function( formatData ) { // LSE INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 84 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 85 ] = function( formatData ) { // EOR ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 86 ] = function( formatData ) { // LSR ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 87 ] = function( formatData ) { // LSE ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 88 ] = function( formatData ) { // CLI NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CLI ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 89 ] = function( formatData ) { // EOR ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 90 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 91 ] = function( formatData ) { // LSE ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 92 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 93 ] = function( formatData ) { // EOR ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " EOR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 94 ] = function( formatData ) { // LSR ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 95 ] = function( formatData ) { // LSE ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LSE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 96 ] = function( formatData ) { // RTS NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RTS ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 97 ] = function( formatData ) { // ADC INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 98 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 99 ] = function( formatData ) { // RRA INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 100 ] = function( formatData ) { // SKB ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 101 ] = function( formatData ) { // ADC ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 102 ] = function( formatData ) { // ROR ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 103 ] = function( formatData ) { // RRA ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 104 ] = function( formatData ) { // PLA NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " PLA ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 105 ] = function( formatData ) { // ADC IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 106 ] = function( formatData ) { // ROR ACCUMULATOR
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROR ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 107 ] = function( formatData ) { // ARR IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ARR ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 108 ] = function( formatData ) { // JMP INDIRECT
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " JMP ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ") = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 109 ] = function( formatData ) { // ADC ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 110 ] = function( formatData ) { // ROR ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 111 ] = function( formatData ) { // RRA ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 112 ] = function( formatData ) { // BVS RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BVS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 113 ] = function( formatData ) { // ADC INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 114 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 115 ] = function( formatData ) { // RRA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 116 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 117 ] = function( formatData ) { // ADC ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 118 ] = function( formatData ) { // ROR ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 119 ] = function( formatData ) { // RRA ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 120 ] = function( formatData ) { // SEI NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SEI ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 121 ] = function( formatData ) { // ADC ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 122 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 123 ] = function( formatData ) { // RRA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 124 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 125 ] = function( formatData ) { // ADC ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ADC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 126 ] = function( formatData ) { // ROR ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " ROR ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 127 ] = function( formatData ) { // RRA ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " RRA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 128 ] = function( formatData ) { // SKB IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 129 ] = function( formatData ) { // STA INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 130 ] = function( formatData ) { // SKB IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 131 ] = function( formatData ) { // AXS INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXS ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 132 ] = function( formatData ) { // STY ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 133 ] = function( formatData ) { // STA ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 134 ] = function( formatData ) { // STX ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 135 ] = function( formatData ) { // AXS ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 136 ] = function( formatData ) { // DEY NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEY ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 137 ] = function( formatData ) { // SKB IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 138 ] = function( formatData ) { // TXA NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TXA ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 139 ] = function( formatData ) { // XAA IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " XAA ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 140 ] = function( formatData ) { // STY ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 141 ] = function( formatData ) { // STA ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 142 ] = function( formatData ) { // STX ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 143 ] = function( formatData ) { // AXS ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 144 ] = function( formatData ) { // BCC RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BCC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 145 ] = function( formatData ) { // STA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 146 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 147 ] = function( formatData ) { // AXA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 148 ] = function( formatData ) { // STY ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 149 ] = function( formatData ) { // STA ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 150 ] = function( formatData ) { // STX ZEROPAGEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 151 ] = function( formatData ) { // AXS ZEROPAGEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 152 ] = function( formatData ) { // TYA NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TYA ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 153 ] = function( formatData ) { // STA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 154 ] = function( formatData ) { // TXS NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TXS ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 155 ] = function( formatData ) { // TAS ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TAS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 156 ] = function( formatData ) { // SAY SAY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SAY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 157 ] = function( formatData ) { // STA ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " STA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 158 ] = function( formatData ) { // XAS ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " XAS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 159 ] = function( formatData ) { // AXA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " AXA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 160 ] = function( formatData ) { // LDY IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDY ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 161 ] = function( formatData ) { // LDA INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 162 ] = function( formatData ) { // LDX IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDX ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 163 ] = function( formatData ) { // LAX INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 164 ] = function( formatData ) { // LDY ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 165 ] = function( formatData ) { // LDA ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 166 ] = function( formatData ) { // LDX ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 167 ] = function( formatData ) { // LAX ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 168 ] = function( formatData ) { // TAY NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TAY ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 169 ] = function( formatData ) { // LDA IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 170 ] = function( formatData ) { // TAX NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TAX ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 171 ] = function( formatData ) { // OAL IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " OAL ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 172 ] = function( formatData ) { // LDY ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 173 ] = function( formatData ) { // LDA ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 174 ] = function( formatData ) { // LDX ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 175 ] = function( formatData ) { // LAX ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 176 ] = function( formatData ) { // BCS RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BCS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 177 ] = function( formatData ) { // LDA INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 178 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 179 ] = function( formatData ) { // LAX INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 180 ] = function( formatData ) { // LDY ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 181 ] = function( formatData ) { // LDA ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 182 ] = function( formatData ) { // LDX ZEROPAGEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 183 ] = function( formatData ) { // LAX ZEROPAGEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 184 ] = function( formatData ) { // CLV NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CLV ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 185 ] = function( formatData ) { // LDA ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 186 ] = function( formatData ) { // TSX NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " TSX ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 187 ] = function( formatData ) { // LAS ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 188 ] = function( formatData ) { // LDY ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 189 ] = function( formatData ) { // LDA ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDA ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 190 ] = function( formatData ) { // LDX ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LDX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 191 ] = function( formatData ) { // LAX ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " LAX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 192 ] = function( formatData ) { // CPY IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPY ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 193 ] = function( formatData ) { // CMP INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 194 ] = function( formatData ) { // SKB IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 195 ] = function( formatData ) { // DCM INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 196 ] = function( formatData ) { // CPY ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 197 ] = function( formatData ) { // CMP ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 198 ] = function( formatData ) { // DEC ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 199 ] = function( formatData ) { // DCM ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 200 ] = function( formatData ) { // INY NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INY ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 201 ] = function( formatData ) { // CMP IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 202 ] = function( formatData ) { // DEX NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEX ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 203 ] = function( formatData ) { // SAX IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SAX ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 204 ] = function( formatData ) { // CPY ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPY ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 205 ] = function( formatData ) { // CMP ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 206 ] = function( formatData ) { // DEC ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 207 ] = function( formatData ) { // DCM ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 208 ] = function( formatData ) { // BNE RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BNE ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 209 ] = function( formatData ) { // CMP INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 210 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 211 ] = function( formatData ) { // DCM INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 212 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 213 ] = function( formatData ) { // CMP ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 214 ] = function( formatData ) { // DEC ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 215 ] = function( formatData ) { // DCM ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 216 ] = function( formatData ) { // CLD NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CLD ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 217 ] = function( formatData ) { // CMP ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 218 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 219 ] = function( formatData ) { // DCM ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 220 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 221 ] = function( formatData ) { // CMP ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CMP ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 222 ] = function( formatData ) { // DEC ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DEC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 223 ] = function( formatData ) { // DCM ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " DCM ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 224 ] = function( formatData ) { // CPX IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPX ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 225 ] = function( formatData ) { // SBC INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 226 ] = function( formatData ) { // SKB IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 227 ] = function( formatData ) { // INS INDIRECTX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X) = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 228 ] = function( formatData ) { // CPX ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 229 ] = function( formatData ) { // SBC ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 230 ] = function( formatData ) { // INC ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 231 ] = function( formatData ) { // INS ZEROPAGE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 232 ] = function( formatData ) { // INX NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INX ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 233 ] = function( formatData ) { // SBC IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 234 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 235 ] = function( formatData ) { // SBC IMMEDIATE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "#$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 236 ] = function( formatData ) { // CPX ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " CPX ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 237 ] = function( formatData ) { // SBC ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 238 ] = function( formatData ) { // INC ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 239 ] = function( formatData ) { // INS ABSOLUTE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + " = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 240 ] = function( formatData ) { // BEQ RELATIVE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " BEQ ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.operationParam, 4 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 241 ] = function( formatData ) { // SBC INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 242 ] = function( formatData ) { // HLT NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " HLT ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 243 ] = function( formatData ) { // INS INDIRECTY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "($" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + "), Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 244 ] = function( formatData ) { // SKB ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKB ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 245 ] = function( formatData ) { // SBC ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 246 ] = function( formatData ) { // INC ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 247 ] = function( formatData ) { // INS ZEROPAGEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 2 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 248 ] = function( formatData ) { // SED NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SED ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 249 ] = function( formatData ) { // SBC ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 250 ] = function( formatData ) { // NOP NONE
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " NOP ";
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 251 ] = function( formatData ) { // INS ABSOLUTEY
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", Y = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 252 ] = function( formatData ) { // SKW ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SKW ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 253 ] = function( formatData ) { // SBC ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " SBC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 254 ] = function( formatData ) { // INC ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INC ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};
formatCpuTraceString[ 255 ] = function( formatData ) { // INS ABSOLUTEX
	formatStr = ZERO_PAD_HEX( formatData.programCounter, 4 ) + " INS ";
	formatStr += "$" + ZERO_PAD_HEX( formatData.opcodeParam, 4 ) + ", X = " + ZERO_PAD_HEX( formatData.operationParam, 2 );
	while ( formatStr.length < 47 ) { formatStr += " "; }
	formatStr += " A:" + ZERO_PAD_HEX( formatData.regs.a, 2 );
	formatStr += " X:" + ZERO_PAD_HEX( formatData.regs.x, 2 );
	formatStr += " Y:" + ZERO_PAD_HEX( formatData.regs.y, 2 );
	formatStr += " P:" + ZERO_PAD_HEX( formatData.regs.p, 2 );
	formatStr += " SP:" + ZERO_PAD_HEX( formatData.regs.sp, 2 );
	return formatStr;
};

export const traceFunctions = formatCpuTraceString;
